window.addEventListener('load', function(){
    document.getElementById('IT').addEventListener("click",fill_IT_Table)
    document.getElementById('DENT').addEventListener("click",fill_DENT_Table)
    document.getElementById('PH').addEventListener("click",fill_PH_Table)
    document.getElementById('err').addEventListener("click",fill_Error_Table)




 // IT 
 function fill_IT_Table(){
    axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/IT').then(resp => {

        //fill table
    document.getElementById('IT_table').innerHTML=ParseITJson(resp.data)
    //Hide tables
    document.getElementById("DENT_DIV").style.display="none";
    document.getElementById("PH_DIV").style.display="none";
    document.getElementById("IT_DIV").style.display="block";

  });
 }

 function ParseITJson(data){
    let res="";
    for(let i=0;i<data.length;i++)
    {
        res+=IT_AddDataTable(data[i])
    }
    return res;
}

 function IT_AddDataTable(obj){
     return`
     <tr>
     <td><span>${obj.Name}</span></td>
     <td>${obj.Date}</td>
     <td>${obj.Start}</td>
     <td>${obj.End}</td>
     </tr> `

}



//Dentistery
function fill_DENT_Table(){
  axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/Dentistery').then(resp => {
      //fill table
  document.getElementById('DENT_table').innerHTML=ParseDENTJson(resp.data)

  //Hide tables
  document.getElementById("DENT_DIV").style.display="block";
  document.getElementById("PH_DIV").style.display="none";
  document.getElementById("IT_DIV").style.display="none";

});
}

function ParseDENTJson(data){
  let res="";
  for(let i=0;i<data.length;i++)
  {
      res+=DENT_AddDataTable(data[i])
  }
  return res;
}

function DENT_AddDataTable(obj){
   return`
   <tr>
   <td><span>${obj.Name}</span></td>
   <td>${obj.Date}</td>
   <td>${obj.Start}</td>
   <td>${obj.End}</td>
   </tr> `

}

// Pharmacy
function fill_PH_Table(){
  axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/Pharmacy').then(resp => {
      //fill table
  document.getElementById('PH_table').innerHTML=ParsePHJson(resp.data)
  //Hide tables
  document.getElementById("DENT_DIV").style.display="none";
  document.getElementById("PH_DIV").style.display="block";
  document.getElementById("IT_DIV").style.display="none";

});
}

function ParsePHJson(data){
  let res="";
  for(let i=0;i<data.length;i++)
  {
      res+=PH_AddDataTable(data[i])
  }
  return res;
}

function PH_AddDataTable(obj){
   return`
   <tr>
   <td><span>${obj.Name}</span></td>
   <td>${obj.Date}</td>
   <td>${obj.Start}</td>
   <td>${obj.End}</td>
   </tr> `

}

 

// Error
function fill_Error_Table(){
  axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/Error').then(resp => {
      //fill table
  document.getElementById('ERROR_table').innerHTML=ParseERRORJson(resp.data)
      //Hide tables
      document.getElementById("DENT_DIV").style.display="none";
      document.getElementById("PH_DIV").style.display="none";
      document.getElementById("IT_DIV").style.display="none";

});
}

function ParseERRORJson(data){
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









})