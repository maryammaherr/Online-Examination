//window.addEventListener('load', function(){
    
    

    //authorizeUser(getUserRole(),ROLES.ADMIN);

/*
    document.getElementById('IT').addEventListener("click",()=>
    fillTable('https://62459b7c2cfed1881723c8a7.mockapi.io/IT')
    );
    
    document.getElementById('DENT').addEventListener("click",()=>
    fillTable('https://62459b7c2cfed1881723c8a7.mockapi.io/Dentistery')
    );

    document.getElementById('IT_err').addEventListener("click",()=>
    fill_IT_Error_Table('https://62459b7c2cfed1881723c8a7.mockapi.io/Error')
    );
*/

//main

    getTableData();
   

    document.getElementById('submit').addEventListener("click",()=>
        SubmitDate()
    );

    document.getElementById('log_out').addEventListener("click",Log_Out)
    document.getElementById('back').addEventListener("click",Back)




    var date=flatpickr("input[type=datetime-local]")
    


   function SubmitDate(){
       
    //document.getElementById("dropdown").style.display="block";
    //document.getElementById("date_time").style.display="none";

    
    let selecteddate=document.getElementById('date').value;
    selecteddate=moment(`${selecteddate} 12:00PM`).valueOf();
    selecteddate=moment(selecteddate).format("YYYY-MM-DD hh:mmA");

    if (selecteddate=="0NaN-NaN-NaN 12:NaNAM")
      return
      
        axios({
            method:"post",
            url:API_LINKS.POST_EXAMTABLE_DATE, 
            params: {
              startdatee: selecteddate,
            },
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Origin": "*",
              //"Authorization": "Bearer "+ getToken()
            }
        })
        .then(function(resp){
          
          if(resp.data.status){

            
            getTableData();

          }
          else if(resp.data.data!=null){
            
            document.getElementById("FAC_ERROR_DIV").style.display="block";
            fillErrorTable(resp.data.data);

          }
          else{
            alert(resp.data.message);
          }

        })
        .catch(function(error){

          alert(error);
   
        })

   }

function Back(){
    window.location.href=LINKS.ADMIN_PAGE;
}


//still working on it................
function getTableData(){
    axios({
        method:"get",
        url:API_LINKS.GET_SCHEDULE_ADMIN, 
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          "Authorization": "Bearer "+ getToken()
        }
        })
        .then(function(resp){
          
          //alert(JSON.stringify( resp.data ));
          if(resp.data.status){
            document.getElementById("dropdown").style.display="block";
            document.getElementById("date_time").style.display="none";
            console.log(resp.data.data)
            //fillTable(resp.data.data);
            populateDropdownlist(resp.data.data)
          }
          else{

          }

        })
        .catch(function(error){
          alert(error);
        })
}

function clearTable(){
    document.getElementById('FAC_Body').innerHTML=""
}

 function fillTable(data){

    //fill table
    document.getElementById("FAC_DIV").style.display="block";
    document.getElementById("FAC_ERROR_DIV").style.display="none";
    document.getElementById('FAC_Body').innerHTML=ParseITJson(data);

 }

 function populateDropdownlist(data){

    console.log(data["IT"])
    var ddl=document.getElementById("fac-dropdown");
    
    var tags=Object.keys(data)
    for(let i=0;i<tags.length;i++){

        
        ddl.innerHTML+=`<a class="dropdown-item" href="#" id="${tags[i] }">${tags[i]}</a>`
        
    }

    $("#fac-dropdown").children().each((i,element)=> {
      element.addEventListener("click",()=>{
        console.log(i)
        fillTable(data[tags[i]])
        console.log(tags[i])
        })
      
    });


}

 function ParseITJson(data){
    //console.log(data)
    let res="";
    for(let i=0;i<data.length;i++)
    {
        res+=IT_AddDataTable(data[i])
    }
    return res;
}

function IT_AddDataTable(obj){

    /*
        <td>${obj.Date.slice(0,10).split("-").reverse().join("/")}</td>
        <td>${obj.Start.slice(12,19)}</td>
        <td>${obj.End}</td>
    */
     return `
        <tr>
            <td>${obj.courseName}</td>
            <td>${obj.courseCode}</td>
            <td>${obj.startTime}</td>
            <td>${obj.duration}</td>
            <td>${obj.endTime}</td>
        </tr> 
    `

}


function fillErrorTable(dict){

    let ele=document.getElementById("FAC_ERROR_table")
    console.log(dict)
    for( var key in dict){
      console.log(key)
      for (let i=0;i<dict[key].length;i++){
        ele.innerHTML+=`
            <tr>
                <td >
                ${key}
                </td>

                <td>
                  ${dict[key][i].name}
                </td>   
            </tr>
          `
      }
    }

}

function ParseIT_ERRORJson(data){
  let res="";
  for(let i=0;i<data.length;i++)
  {
      res+=Error_AddDataTable(data[i])
  }
  return res;
}

function Error_AddDataTable(obj){
   return`
   <tr>
   <td><span>${obj.Name}</span></td>
   <td><span>---</span></td>
   <td><span>---</span></td>
   <td><span>---</span></td>

   </tr> `

}




//})