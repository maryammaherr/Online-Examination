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
    
    