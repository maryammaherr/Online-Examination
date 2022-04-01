$(document).ready(function () {
  //Information Technology
    var IT_json = [
        {
          Course_Name: "Information Engineering",
          Date:"22/11/2022",
          Start: "9:00 AM",
          End: "10:00 AM",
        },
        {
            Course_Name: "Multimedia",
            Date:"23/11/2022",
            Start: "8:00 AM",
            End: "9:00 AM",
          },
          {
            Course_Name: "Digital Multimedia",
            Date:"24/11/2022",
            Start: "10:30 AM",
            End: "11:00 AM",
          },
          {
            Course_Name: "Digital Signal Processing",
            Date:"25/11/2022",
            Start: "9:00 AM",
            End: "10:30 AM",
          },
          {
            Course_Name: "Artificial Intelliegance",
            Date:"25/11/2022",
            Start: "11:30 AM",
            End: "12:30 PM",
          },
      ];


      IT_AddDataTable(IT_json)
      function IT_AddDataTable(data){
          var table = document.getElementById('IT_table')
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


// Mass Communication
var MASS_json = [
  {
    Course_Name: "Mass Coomunication 1",
    Date:"22/11/2022",
    Start: "9:00 AM",
    End: "10:00 AM",
  },
  {
      Course_Name: "Mass Coomunication 2",
      Date:"23/11/2022",
      Start: "8:00 AM",
      End: "9:00 AM",
    },
    {
      Course_Name: "Mass Coomunication 3",
      Date:"24/11/2022",
      Start: "10:30 AM",
      End: "11:00 AM",
    },
    {
      Course_Name: "Mass Coomunication 4",
      Date:"25/11/2022",
      Start: "9:00 AM",
      End: "10:30 AM",
    },
    {
      Course_Name: "Mass Coomunication 5",
      Date:"25/11/2022",
      Start: "11:30 AM",
      End: "12:30 PM",
    },
];


MASS_AddDataTable(MASS_json)
function MASS_AddDataTable(data){
    var table = document.getElementById('MASS_table')
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

// Pharmacy
var PH_json = [
  {
    Course_Name: "Pharmacy 1",
    Date:"22/11/2022",
    Start: "9:00 AM",
    End: "10:00 AM",
  },
  {
      Course_Name: "Pharmacy 2",
      Date:"23/11/2022",
      Start: "8:00 AM",
      End: "9:00 AM",
    },
    {
      Course_Name: "Pharmacy 3",
      Date:"24/11/2022",
      Start: "10:30 AM",
      End: "11:00 AM",
    },
    {
      Course_Name: "Pharmacy 4",
      Date:"25/11/2022",
      Start: "9:00 AM",
      End: "10:30 AM",
    },
    {
      Course_Name: "Pharmacy 5",
      Date:"25/11/2022",
      Start: "11:30 AM",
      End: "12:30 PM",
    },
];


PH_AddDataTable(PH_json)
function PH_AddDataTable(data){
    var table = document.getElementById('PH_table')
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


// Dentistry
var DENT_json = [
  {
    Course_Name: "Dentistry 1",
    Date:"22/11/2022",
    Start: "9:00 AM",
    End: "10:00 AM",
  },
  {
      Course_Name: "Dentistry 2",
      Date:"23/11/2022",
      Start: "8:00 AM",
      End: "9:00 AM",
    },
    {
      Course_Name: "Dentistry 3",
      Date:"24/11/2022",
      Start: "10:30 AM",
      End: "11:00 AM",
    },
    {
      Course_Name: "Dentistry 4",
      Date:"25/11/2022",
      Start: "9:00 AM",
      End: "10:30 AM",
    },
    {
      Course_Name: "Dentistry 5",
      Date:"25/11/2022",
      Start: "11:30 AM",
      End: "12:30 PM",
    },
];


DENT_AddDataTable(DENT_json)
function DENT_AddDataTable(data){
    var table = document.getElementById('DENT_table')
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


var ERROR_json = [
  {
    Course_Name: "Pattern Recognition",
    Date:"22/11/2022",
    Start: "9:00 AM",
    End: "10:00 AM",
  },
  {
      Course_Name: "Digital Signal Proccesing",
      Date:"23/11/2022",
      Start: "8:00 AM",
      End: "9:00 AM",
    },
    {
      Course_Name: "Information Engineering",
      Date:"24/11/2022",
      Start: "10:30 AM",
      End: "11:00 AM",
    },
    {
      Course_Name: "DIgital Multimedia",
      Date:"24/11/2022",
      Start: "10:30 AM",
      End: "11:00 AM",
    },
    {
      Course_Name: "Information Engineering",
      Date:"24/11/2022",
      Start: "10:30 AM",
      End: "11:00 AM",
    },
    {
      Course_Name: "Netork operation and Admenistration",
      Date:"25/11/2022",
      Start: "9:00 AM",
      End: "10:30 AM",
    },
    
 
];

ERROR_AddDataTable(ERROR_json)
function ERROR_AddDataTable(data){
    var table = document.getElementById('ERROR_table')
    for(var i=0;i<data.length;i++){
        var row = `
        <div class="error_courses">
        <ul>
        <li>${data[i].Course_Name}</li>
        </ul>
        <div>
          `
          table.innerHTML+=row
        }

    

}

});


function DENT_FUN(){
  document.getElementById("DENT_DIV").style.display="block";
  document.getElementById("PH_DIV").style.display="none";
  document.getElementById("IT_DIV").style.display="none";
  document.getElementById("MASS_DIV").style.display="none";
}

function MASS_FUN(){
  document.getElementById("DENT_DIV").style.display="none";
  document.getElementById("PH_DIV").style.display="none";
  document.getElementById("IT_DIV").style.display="none";
  document.getElementById("MASS_DIV").style.display="block";
}

function IT_FUN(){
  document.getElementById("DENT_DIV").style.display="none";
  document.getElementById("PH_DIV").style.display="none";
  document.getElementById("IT_DIV").style.display="block";
  document.getElementById("MASS_DIV").style.display="none";
}

function PH_FUN(){
  document.getElementById("DENT_DIV").style.display="none";
  document.getElementById("PH_DIV").style.display="block";
  document.getElementById("IT_DIV").style.display="none";
  document.getElementById("MASS_DIV").style.display="none";
}
