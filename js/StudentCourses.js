$( document ).ready(function() {
//status -> Done , Upcoming
var windowObjectReference = null; // global variable

$(window).focus(function() {  //reload page on focus
  location.reload();
});


console.log(getUserData())

fetchSchedule();      //call api   //then fill json 


setCurrentDate();



function fetchSchedule(){
  $.ajax({
    url: "http://localhost:8241/api/Course/StudentCourses",
    type: "GET",
    data: {
      student_id: getUserData().id,
    },
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    },
    success: function (data) {
  
      data.data = sortByKey(data.data, 'startTime');
  
      init_body(data.data);
  
      if(data.status==true)
        toastSuccess(`${getUserData().firstname} here is your schedule `);
      else
        toastError(data.message);
  
    },
    error: function (error) {
      console.log(error);
      toastError("Connecting to the server failed!");
    },
  });
}


var DATE_TIME_NOW;
function setCurrentDate(){
  $.ajax({
    url: "http://worldtimeapi.org/api/timezone/Africa/Cairo",
    type: "GET",
 
    success: function (data) {
      //console.log(data.datetime);
      DATE_TIME_NOW= new Date(data.datetime) ;
      //console.log(DATE_TIME_NOW);

      
      
    },

  });
}

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

function get_button(){
  return `<input class="btn btn-primary" type="button" value="Examinate"></input>`
}


function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}


function init_body(table_data){
  

  $("#table-body").html("");
  for(let i=0;i<table_data.length;i++){

    var start_time=table_data[i]["startTime"];
    var mydate = new Date(start_time);
    var time=formatAMPM(mydate) 
    mydate=mydate.toLocaleString().split(",");
    var date=mydate[0];
                 //parsing time into 2 cols
    
    console.log(time)
    var td1 = get_td(  table_data[i]["courseName"]   );
    var td2 = get_td(  date   ); 
    var td3 = get_td(  time   );
    var td4 = get_td(  table_data[i]["durationInMinutes"]+" minutes"   ); 
    var td5 = get_td(  get_status_html(table_data[i]["isExaminated"])   ); 
    var td6;
    
    if(table_data[i]["isExaminated"])
    {
      if(table_data[i]["currentMarks"]==null)
        td6 =get_td("INCOMPLETED")
      else
        td6 = get_td(table_data[i]["currentMarks"]+"/"+table_data[i]["totalMarks"]);
    } 
    else
    {
      td6 = get_td(  get_button() );
      td6.onclick=function(){

        setCurrentDate();

        console.log(dates.compare( DATE_TIME_NOW, new Date(table_data[i]["startTime"]) ));

        //if date didn't come don't continue
        if(dates.compare( DATE_TIME_NOW, new Date(table_data[i]["startTime"]) ) == -1) 
        {
          toastWarning("You can't have this exam yet!")
          return;
        }
        
        


        setCourseId(table_data[i]["courseId"]);
        setExamDetails( table_data[i]);

        console.log(table_data[i])
        if(windowObjectReference == null || windowObjectReference.closed)
        {
          windowObjectReference = window.open("ExamPage.html",
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

var dates = {
  convert:function(d) {
      // Converts the date in d to a date-object. The input can be:
      //   a date object: returned without modification
      //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
      //   a number     : Interpreted as number of milliseconds
      //                  since 1 Jan 1970 (a timestamp) 
      //   a string     : Any format supported by the javascript engine, like
      //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
      //  an object     : Interpreted as an object with year, month and date
      //                  attributes.  **NOTE** month is 0-11.
      return (
          d.constructor === Date ? d :
          d.constructor === Array ? new Date(d[0],d[1],d[2]) :
          d.constructor === Number ? new Date(d) :
          d.constructor === String ? new Date(d) :
          typeof d === "object" ? new Date(d.year,d.month,d.date) :
          NaN
      );
  },
  compare:function(a,b) {
      // Compare two dates (could be of any type supported by the convert
      // function above) and returns:
      //  -1 : if a < b
      //   0 : if a = b
      //   1 : if a > b
      // NaN : if a or b is an illegal date
      // NOTE: The code inside isFinite does an assignment (=).
      return (
          isFinite(a=this.convert(a).valueOf()) &&
          isFinite(b=this.convert(b).valueOf()) ?
          (a>b)-(a<b) :
          NaN
      );
  },
  inRange:function(d,start,end) {
      // Checks if date in d is between dates in start and end.
      // Returns a boolean or NaN:
      //    true  : if d is between start and end (inclusive)
      //    false : if d is before start or after end
      //    NaN   : if one or more of the dates is illegal.
      // NOTE: The code inside isFinite does an assignment (=).
     return (
          isFinite(d=this.convert(d).valueOf()) &&
          isFinite(start=this.convert(start).valueOf()) &&
          isFinite(end=this.convert(end).valueOf()) ?
          start <= d && d <= end :
          NaN
      );
  }
}

});

