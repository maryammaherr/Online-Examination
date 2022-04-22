window.addEventListener('load', function(){
  


function Log_Out(){
  window.location.replace("../html/Login.html")
}  
function Back(){
  window.location.replace("../html/Admin_Page.html")
}  
function Upload(){
  window.location.replace("../html/question-bank.html")
}  
function Details(){
  window.location.replace("../html/Exam_Details.html")
}  



  fillData()
        
      //ParseJson(resp.data);
function ParseJson(data){
  let tbody=document.getElementById('table-body');
  for(let i=0;i<data.length;i++)
  {
      tbody.appendChild(AddDataTable(data[i]))
  }
  return tbody;
}
  

  function AddDataTable(obj){
    var tr  = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    var Upload_button = document.createElement("button");
    Upload_button.innerHTML = "Upload File";
    Upload_button.id = obj.id;
    Upload_button.addEventListener("click",Upload)
    Upload_button.classList.add("btn_upload");


    var Details_button = document.createElement("button");
    Details_button.innerHTML = " Exam Details";
    Details_button.id = obj.id;
    Details_button.addEventListener("click",Details)
    Details_button.classList.add("btn_details");

    td1.innerHTML = obj.Name;
    tr.appendChild(td1);

    td2.innerHTML = obj.id;
    tr.appendChild(td2);

    td3.appendChild(Upload_button);
    tr.appendChild(td3);

    td4.appendChild(Details_button);
    tr.appendChild(td4);

    
    return tr;

/*
   return`
   <tr>
   <td>${obj.Name}</td>
   <td>${obj.id}</td>
   <td> </td>
   <td><button type="button" class="btn btn-primary " id="button_"+${obj.id} >
   Add Details </button></td>
   </tr>
   `*/
  }


function fillData(){
  axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/IT', {
    params: {
     //id: 1,
    }
   })
    .then(function(resp){
      ParseJson(resp.data);

    })
    .catch(function(error){
      console.log(error);
    })
}
   

  //logout
  document.getElementById('log_out').addEventListener("click",Log_Out);
  document.getElementById('back').addEventListener("click",Back);
  

});

       



/*
$( document ).ready(function() {

    var json = [
        {
          Course_Name: "Information Engineering",
          Code:"HSN",
    
        },
        {
            Course_Name: "Network-Based Multimedia",
            Code:"CNB",
          },
          {
            Course_Name: "Pattern Recognition",
            Code:"ABC",
          },
          {
            Course_Name: "Digital Signal Processing",
            Code:"ABCD",
          },
          {
            Course_Name: "Network operation and Administration",
            Code:"ABCDE",
          },
      ];



      AddDataTable(json)
      function AddDataTable(data){
          var table = document.getElementById('table-body')
          for(var i=0;i<data.length;i++){
              var row = `
              <tr>
              <td>${data[i].Course_Name}</td>
              <td>${data[i].Code}</td>
              <td><button type="button" class="btn btn-primary " id="btn" >
              Upload File </button></td>
              <td><button type="button" class="btn btn-primary " id="btn" >
              Add Details </button></td>
              </tr>
              `
              table.innerHTML+=row
          }

      }
    
    });
    
    */