window.addEventListener('load', function(){
    document.getElementById('IT').addEventListener("click",()=>
    fill_IT_Table('https://62459b7c2cfed1881723c8a7.mockapi.io/IT')
    );
    document.getElementById('DENT').addEventListener("click",()=>
    fill_IT_Table('https://62459b7c2cfed1881723c8a7.mockapi.io/Dentistery')
    );
    document.getElementById('IT_err').addEventListener("click",()=>
    fill_IT_Error_Table('https://62459b7c2cfed1881723c8a7.mockapi.io/Error')
    );
    document.getElementById('submit').addEventListener("click",()=>
    SubmitDate()
    );


confg={
        enableTime: true,
        dateFormat: "Y-m-d H:i",
    }

    flatpickr("input[type=datetime-local]", confg);


   function SubmitDate(){
       
    document.getElementById("dropdown").style.display="block";
    document.getElementById("date_time").style.display="none";


   }


 // IT 
 function fill_IT_Table(link){

    axios.get(link).then(resp => {
        //fill table
    document.getElementById('IT_table').innerHTML=ParseITJson(resp.data)
           //Hide tables
           document.getElementById("IT_DIV").style.display="block";
           document.getElementById("IT_ERROR_DIV").style.display="block";
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
     <td>${obj.Date.slice(0,10).split("-").reverse().join("/")}</td>
     <td>${obj.Start.slice(12,19)}</td>
     <td>${obj.End}</td>
     </tr> `

}

// IT_Error
function fill_IT_Error_Table(err){

  axios.get(err).then(resp => {
      //fill table
  document.getElementById('IT_ERROR_table').innerHTML=ParseIT_ERRORJson(resp.data)
});
ih

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




})