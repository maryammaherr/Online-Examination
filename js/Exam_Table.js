$(document).ready(function () {
    var json = [
        {
          Course_Name: "IE",
          Date:"22/11/2022",
          Start: "9:00 AM",
          End: "10:00 AM",
        },
        {
            Course_Name: "MM",
            Date:"23/11/2022",
            Start: "8:00 AM",
            End: "9:00 AM",
          },
          {
            Course_Name: "DMM",
            Date:"24/11/2022",
            Start: "10:30 AM",
            End: "11:00 AM",
          },
          {
            Course_Name: "DSP",
            Date:"25/11/2022",
            Start: "9:00 AM",
            End: "10:30 AM",
          },

      ];


      AddDataTable(json)
      function AddDataTable(data){
          var table = document.getElementById('exam_table')
          for(var i=0;i<data.length;i++){
              var row = `
              <tr>
              <td>${data[i].Course_Name}</td>
              <td>${data[i].Date}</td>
              <td>${data[i].Start}</td>
              <td>${data[i].End}</td>
              </tr>
              `
              table.innerHTML+=row
          }

      }

});