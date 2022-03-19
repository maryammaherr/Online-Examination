$( document ).ready(function() {
//status -> Done , Upcoming


//call api
//then fill json 


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

function get_buttonLink(course_id){
  return `<a
          href="Exam_Page/${course_id}"><input class="btn btn-primary" type="button" value="Examinate"></input></a>`
}

function init_body(table_data){

  $("#table-body").html("");
  for(let i=0;i<table_data.length;i++){
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
      td6 = get_td(  get_buttonLink( table_data[i]["courseId"]) );

    var row = document.createElement('tr');
    row.append(td1,td2,td3,td4,td5,td6);

    $("#table-body").append(row);
  }


}

});

