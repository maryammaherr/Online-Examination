let data=getExamResult();

if(((data.currentScore/ data.totalScore)*100)<100)
    $("#exam-state").html("EXAM FAILED");

$("#objective-question").text(data.totalScore);
$("#total-correct").text(data.currentScore);
$("#total-incorrect").text(data.totalScore-data.currentScore);
$("#percentage").text(((data.currentScore/ data.totalScore)*100).toString()+"%");