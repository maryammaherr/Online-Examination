class ExcelParser {

    filetype = 1; // 1 invalid    2 mcq   3 written 
    csvFILE=null;
    input_ext= "";
    XLSX = XLSX //require('xlsx');
    //fs = fs //require('fs');
    Papa = Papa //require('papaparse');  
    written_header=['question','answer','difficulty'];
    mcq_header=['question','type','a','b','c','d','goal','difficulty'];
    difficulty=['hard','moderate','easy']
    mcq_chocies=['a','b','c','d']
    constructor(file,filename) { 
      this.csvFILE = file;
      this.input_ext=filename.match(/\.[0-9a-z]+$/i)[0];
    }

    arraysEqual(a, b) {
      if (a === b) return true;
      if (a == null || b == null) return false;
      if (a.length !== b.length) return false;
    
      // If you don't care about the order of the elements inside
      // the array, you should sort both arrays here.
      // Please note that calling sort on an array will modify that array.
      // you might want to clone your array first.
    
      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }

    isAllowedFile(){
      return ([".csv"].includes(this.input_ext) )
    }

    isXLSX(){
      return (".xlsx" == this.input_ext)
    }

    convertToCSV(){
        const workBook = this.XLSX.readFile(this.filepath);
        this.filepath=this.filepath.replace(".xlsx", ".csv");
        this.XLSX.writeFile(workBook, this.filepath, { bookType: "csv" })
    }

    parseCSV = async (csvfileAsString) => {
      //const csvFile = this.fs.readFileSync(filePath)
      const csvData = csvfileAsString
      return new Promise(resolve => {
        this.Papa.parse(csvData, {
          header: true,
          encoding:"utf-8",
          complete: results => {
            console.log('Complete', results.data.length, 'records.'); 
            resolve(results.data);
          }
        });
      });
    };
    
    async getJSON(){

      if(!this.isAllowedFile())
        throw("Please insert CSV file only.");
      
      if(this.isXLSX()){
        //this.convertToCSV();
      }

      var res = await this.parseCSV(this.csvFILE)
      var clean_res= await this.cleanJSON(res);
      var csv = this.Papa.unparse(clean_res);
      this.validateJSON(clean_res);
      return {"csvFile":csv,"Jsondata":clean_res,"file_type":this.filetype};
    }

    writeToCSV(jsonfile){
      var csv=this.Papa.unparse(jsonfile);
      this.fs.writeFileSync(this.filepath,csv);
    }

    trimmer(txt){
      let text=txt;
      return text.replace(/\s+/g, ' ').trim();
    }

    cleanJSON(data){
      if(this.isEmptyObj(data[data.length-1]) ) data.pop(); //get rid of the last empty row
      return data.map(
        obj => {
            let modifiedObj={};
            for(let key in obj){
              let newkey = key.replace('﻿', '').toLowerCase();
              newkey=this.trimmer(newkey);
              
              let newvalue=this.trimmer(obj[key]);

              if( ["goal","difficulty","a","b","c"].includes(key) ) //new feature
                newvalue=newvalue.toLowerCase().replaceAll(',', '');

              modifiedObj[newkey]=newvalue;
            }            
            return modifiedObj;
        }
      );
    }

    isEmptyObj(obj){
      for(var key in obj) {
        if(this.trimmer(obj[key]) != "") 
           return false 

        return true
      }
    }

    validateJSON(data){

      var alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      if (data == null)
        throw("The file is empty");

      if(this.arraysEqual(Object.keys(data[0]),this.mcq_header)){  //really mcq

        //full mcq and multichoice all fields must not be empty
        //true false all not empty but c, d
        //a is alower and nothing else and so on
        //goal must contain a,b,c,d only ---> must remove commas on cleaning
        //difficulity from array hard, easy, moderate
        this.filetype=2;
        for(let i=0;i<data.length;i++){
 
            if(data[i].type==3 )
            {
              if([data[i].a,data[i].b].includes(""))
                throw(`Empty field detected at row #${i+2}`);
            }
            else{
              let target=Object.values(data[i])
              if(target.includes(""))
              {
                let idx=target.indexOf("");

                throw(`Empty field detected at ${alphabets[idx]}${i+2}`);
              }

              if(!this.difficulty.includes(data[i].difficulty.toLowerCase()))
              {
                //console.log(data[i].difficulty);
                throw(`Wrong format of difficulty at cell ${alphabets[7]}${i+2} `);
              }

              if(!data[i].goal.split("").every(x => [ 'a', 'b', 'c', 'd' ].includes(x))){ //goal validation
                  throw(`Wrong format of goal at row #${i+2} `);
              }

            }

          }
      }
      else if(this.arraysEqual(Object.keys(data[0]),this.written_header)){ //really written
        this.filetype=3;
        //written-> all must not be empty
        for(let i=0;i<data.length;i++){

            let target=Object.values(data[i])
            if(target.includes(""))
            {
              let idx=target.indexOf("");
              throw(`Empty field detected at ${alphabets[idx]}${i+1}`);
            }
            if(!this.difficulty.includes(data[i].difficulty.toLowerCase()))
            {
              //console.log(data[i].difficulty);
              throw(`Wrong format of difficulty at cell ${alphabets[2]}${i+2} `)
            }

        }
      }
      else{
        throw("Wrong header format!"); //wrong header format
      }
      
    }

}

/*

  const pojo = new ExcelParser("files/mcq_q2.xlsx");

  pojo.getJSON()
  .then( (data) => { 
      console.log(data.slice(-1).pop()) 
      pojo.writeToCSV(data);

  }).
  catch(err => {
    console.error(err);
    console.error("bad");
  }
);


*/




