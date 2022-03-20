$( document ).ready(function() {
//status -> Done , Upcoming


//call api
//then fill json 
$.ajax({
  url: "http://localhost:8241/api/Course/StudentCourses",
  type: "GET",
  data: {
    std_id: "fa41f67a-af0c-4e73-bcee-422605a93dec",
  },
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
  },
  success: function (data) {
    console.log(data);
    init_body(data.data);
  },
  error: function (xhr, status, error) {
    console.log(error);
    console.log(status);
    console.log(xhr.responseText);
    //toastError("Wrong Credentials");
  },
});

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

function set_course_id(course_id){
  sessionStorage.setItem("exam-courseId", course_id);
}

function get_buttonLink(){
  return `<a  href="Exam_Page.html"><input class="btn btn-primary" type="button" value="Examinate"></input></a>`
}

function init_body(table_data){
  console.log(table_data.length)
  $("#table-body").html("");
  for(let i=0;i<table_data.length;i++){
    console.log("haha")
    //table_data[i][""]
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
      td6 = get_td(  get_buttonLink() );

    td6.onclick=function(){set_course_id( table_data[i]["courseId"]);}
    var row = document.createElement('tr');
    row.append(td1,td2,td3,td4,td5,td6);

    $("#table-body").append(row);
  }


}

});

