window.addEventListener('load', function(){
  




fillData();
        
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
   


  document.getElementById('log_out').addEventListener("click",Log_Out);
  document.getElementById('back').addEventListener("click",Back);


  function Log_Out(){
    window.location.href=LINKS.LOGIN_PAGE;
  }  
  function Back(){
    window.location.replace("../html/Admin_Page.html")
  }  
  function Upload(){
    window.location.href=LINKS.QUESTION_BANK;
  }  
  function Details(){
    window.location.href=LINKS.EXAM_DETAILS_PAGE;
  }  
  

});

       


