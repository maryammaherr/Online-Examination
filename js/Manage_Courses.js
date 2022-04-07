window.addEventListener('load', function(){

    axios.get('http://hemajoo-001-site1.etempurl.com/api/Course/ProfessorCourses', {
      params: {
        prof_id: 'ecc03208-19aa-480f-9fe7-ada45211ca70',
      }
    })
      .then(function(resp){
        document.getElementById('table-body').innerHTML=ParseJson(resp.data.data)
        
        //ParseJson(resp.data);
 function ParseJson(data){
  let res="";
  for(let i=0;i<data.length;i++)
  {
      res+=AddDataTable(data[i])
  }
  return res;
}

function AddDataTable(obj){
   return`
   <tr>
   <td>${obj.name}</td>
   <td>${obj.id}</td>
   <td><button type="button" class="btn btn-primary " id="btn" >
   Upload File </button></td>
   <td><button type="button" class="btn btn-primary " id="btn" >
   Add Details </button></td>
   </tr>
   `

}
      })
      .catch(function(error){
        console.log(error);
      })


 //fill table



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