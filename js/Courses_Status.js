$( document ).ready(function() {
//status -> Done , Upcoming
var windowObjectReference = null; // global variable

$(window).focus(function() {
  location.reload();
});

//call api
//then fill json 
$.ajax({
  url: "http://localhost:8241/api/Course/StudentCourses",
  type: "GET",
  data: {
    std_id: JSON.parse(localStorage.getItem('user-data')).id,
  },
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
  },
  success: function (data) {
    console.log(data);
    data.data = sortByKey(data.data, 'startTime');
    init_body(data.data);
  },
  error: function (xhr, status, error) {
    console.log(error);
    console.log(status);
    console.log(xhr.responseText);
    //toastError("Wrong Credentials");
  },
});

function sortByKey(array, key) {
  return array.sort(function(a, b) {
      var x =new Date( a[key]); var y =new Date( b[key]);
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
  }
  
  

function get_td(content){
  let td = document.createElement("td");
  td.innerHTML=content;
  return td;
}

function get_status_html(flag){
  if(flag){
    return `<span class="badge badge-pill badge-success p-2">Done</span>`
  }
  else{
    return `<span class="badge badge-pill badge-warning p-2">Upcoming</span>`
  }
}

function set_examdetails(examdetails){
  sessionStorage.setItem("exam-details", JSON.stringify(examdetails));
}

function get_button(){
  return `<input class="btn btn-primary" type="button" value="Examinate"></input>`
}

function init_body(table_data){
  console.log(table_data.length)
  $("#table-body").html("");
  for(let i=0;i<table_data.length;i++){

    var start_time=table_data[i]["startTime"];
    var mydate = new Date(start_time);
    mydate=mydate.toLocaleString().split(",");
    var date=mydate[0];
    var time=mydate[1];               //parsing time into 2 cols

    var td1 = get_td(  table_data[i]["courseName"]   );
    var td2 = get_td(  date   ); 
    var td3 = get_td(  time   );
    var td4 = get_td(  table_data[i]["durationInMinutes"]+" minutes"   ); 
    var td5 = get_td(  get_status_html(table_data[i]["isExaminated"])   ); 
    var td6=null;
    
    if(table_data[i]["isExaminated"])
      td6 = get_td( table_data[i]["currentMarks"]+"/"+table_data[i]["totalMarks"]   ); 
    else
    {
      td6 = get_td(  get_button() );
      td6.onclick=function(){
        set_examdetails( table_data[i]);
        console.log(table_data[i])
        if(windowObjectReference == null || windowObjectReference.closed)
        {
          windowObjectReference = window.open("Exam_Page.html",
          "EXAMINATION PAGE", "menubar=1,resizable=0,popup=true,width=4000,height=4000");
        }
        else
        {
          windowObjectReference.focus();
        };
      }
    }
      
    
    var row = document.createElement('tr');
    row.append(td1,td2,td3,td4,td5,td6);

    $("#table-body").append(row);
  }


}

});

