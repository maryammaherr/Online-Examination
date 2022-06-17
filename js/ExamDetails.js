window.addEventListener('load', function(){

    //authorizeUser(getUserRole(),ROLES.PROFESSOR);

    document.getElementById('check').addEventListener("click",validate)
    document.getElementById('log_out').addEventListener("click",Log_Out)
    document.getElementById('back').addEventListener("click",Back)


    //alert(getCourseName());

    $("#course_name").html(getCourseName());

    initDropDownLists();
    getExamDetails(API_LINKS.GET_EXAM_DETAILS);

    var isUpdate=false;



function getExamDetails(link)
{
	axios.get(link, {
	  params: {
        course_id: getCourseId(),
	  },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer "+ getToken()
      }
	 }).then(function(resp){

        console.log(resp);
        if(resp.data.status==false){
            toastError(resp.data.message);
        }
        else{
            isUpdate=true;
            toastSuccess(resp.data.message);
            parseJsonAndFill(resp.data.data);
        }    
        

    })
    .catch(function(error){
		console.log(error);
        toastError(error);
	})
}



function parseJsonAndFill(obj){
    $('#Question_Number').val(obj.numberOfQuestions);
    $('#type').val(obj.typeOfQuestions.toUpperCase());
    $('#hard').val(obj.numberOfHardQuestions);
    $('#easy').val(obj.numberOfEasyQuestions);
    $('#moderate').val(obj.numberOfModQuestions);
}

//validate
function validate() {

    type_sum = parseInt($('#easy').val())+parseInt($('#moderate').val())+parseInt($('#hard').val())
    if(type_sum < parseInt($('#Question_Number').val() )|| type_sum > parseInt($('#Question_Number').val())){
      toastWarning("Make sure that the total number of questions is equal to total of question types you selected");
      return;
    }

    if(isUpdate){
        putExamDetails(API_LINKS.PUT_EXAM_DETAILS);
    }else{
        postExamDetails(API_LINKS.POST_EXAM_DETAILS);
    }
    
  

} 

function postExamDetails(link){
    axios({
        method: 'post',
        url: link,
        data:{
            numberOfQuestions: parseInt($('#Question_Number').val() ),
            typeOfQuestions:$('#type').val(),
            numberOfHardQuestions:parseInt($('#hard').val()),
            numberOfEasyQuestions:parseInt($('#easy').val()),
            numberOfModQuestions:parseInt($('#moderate').val()),
        }
    })
    .then(function(resp){
        if(resp.data.status)
         toastSuccess(resp.data.message);
        else
         toastError(resp.data.message);

		console.log(resp);
	})
	.catch(function(error){
        toastError(error);
		console.log(error);
	})
}

function putExamDetails(link){
    axios({
        method: 'put',
        url: link,
		params:{
		   course_id:getCourseId()
		},
        data:{
            numberOfQuestions: parseInt($('#Question_Number').val() ),
            typeOfQuestions:$('#type').val(),
            numberOfHardQuestions:parseInt($('#hard').val()),
            numberOfEasyQuestions:parseInt($('#easy').val()),
            numberOfModQuestions:parseInt($('#moderate').val()),
        }
    })
    .then(function(resp){
        if(resp.data.status)
         toastSuccess(resp.data.message);
        else
         toastError(resp.data.message);

		console.log(resp);
	})
	.catch(function(error){
        toastError(error);
		console.log(error);
	})
}

function Back(){
    window.location.href=LINKS.PROFESSOR_COURSES;
  }  


function initDropDownLists(){
    for(var i=0;i<=120;i++){
        //questions
        var questions = document.getElementById("Question_Number");
        var option = document.createElement("option");
        option.value =i;
        option.text = i+" "+"Questions";
        questions.add(option);

        //type
        var typeQ = document.getElementById("type");
        typeQ.innerHTML=`
        <option value="MCQ"> MCQ </option>
        <option value="MIXED"> MIXED </option>
        `  

        //hard
            var hardQ = document.getElementById("hard");
            var hard_option= document.createElement("option");
            hard_option.value =i;
            hard_option.text = i+" "+"Questions";
            hardQ.add(hard_option);
        

        //easy
            var easyQ = document.getElementById("easy");
            var easy_option= document.createElement("option");
            easy_option.value =i;
            easy_option.text = i+" "+"Questions";
            easyQ.add(easy_option);
        
        //noderate
            var moderateQ = document.getElementById("moderate");
            var Moderate_option= document.createElement("option");
            Moderate_option.value =i;
            Moderate_option.text = i+" "+"Questions";
            moderateQ.add(Moderate_option);
        
    }
    $('#Question_Number').on('change', function() {
        questions_value=this.value;
    });
    //type
    $('#type').on('change', function() {
        type_value=this.value;
    });
    //hard
    $('#hard').on('change', function() {
        Hard_value=this.value;
    });
    //easy
    $('#easy').on('change', function() {
        Easy_value=this.value;
    });
    //moderate
    $('#moderate').on('change', function() {
        Moderate_value=this.value;
    }); 
}





/*
// type questions
fill_type_Data()
function fill_type_Data()
{
   axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details').then(resp => {
       document.getElementById('options').innerHTML=Parse_type_Json(resp.data)
   });
   
}
function Parse_type_Json(data){
    let res="";
    for(let i=0;i<1;i++)
    {
        res+=Add_type_Data(data[i])
    }
    return res;
}

function Add_type_Data(obj){
    for(var i=1;i<=2;i++){
        var x = document.getElementById("type");
        
        x.innerHTML=`
        <option value="Mixed"> Mixed </option>
        <option value="Written"> Written </option>
        `  
    }
     //get the value of the selected option
     $('#type').on('change', function() {
        type_value=this.value;

      });
}

  


//Hard questions
fill_Hard_Data()
function fill_Hard_Data(){
   axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details').then(resp => {
       document.getElementById('options').innerHTML=Parse_Hard_Json(resp.data)
   });
}
function Parse_Hard_Json(data){
   let res="";
   for(let i=0;i<1;i++)
   {
       res+=Add_Hard_Data(data[i])
   }
   return res;
}

function Add_Hard_Data(obj){
   var Questions = obj.total;
   for(var i=0;i<=Questions;i++){
       var x = document.getElementById("hard");
       var hard_option= document.createElement("option");
       hard_option.value =i;
       hard_option.text = i+" "+"Question";
       x.add(hard_option);
   }
//get the value of the selected option
$('#hard').on('change', function() {
    Hard_value=this.value;
 });

 }



 //Easy questions
fill_Easy_Data()
function fill_Easy_Data(){
   axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details').then(resp => {
       document.getElementById('options').innerHTML=Parse_Easy_Json(resp.data)
   });
}
function Parse_Easy_Json(data){
   let res="";
   for(let i=0;i<1;i++)
   {
       res+=Add_Easy_Data(data[i])
   }
   return res;
}

function Add_Easy_Data(obj){
   var Questions = obj.total;
   for(var i=0;i<=Questions;i++){
       var x = document.getElementById("easy");
       var easy_option= document.createElement("option");
       easy_option.value =i;
       easy_option.text = i+" "+"Question";
       x.add(easy_option);
   }
//get the value of the selected option
$('#easy').on('change', function() {
    Easy_value=this.value;
 });

 }


 //Moderate questions
 fill_Moderate_Data()
 function fill_Moderate_Data(){
    axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details').then(resp => {
        document.getElementById('options').innerHTML=Parse_Moderate_Json(resp.data)
    });
 }
 function Parse_Moderate_Json(data){
    let res="";
    for(let i=0;i<1;i++)
    {
        res+=Add_Moderate_Data(data[i])
    }
    return res;
 }
 
 function Add_Moderate_Data(obj){
    var Questions = obj.total;
    for(var i=0;i<=Questions;i++){
        var x = document.getElementById("moderate");
        var Moderate_option= document.createElement("option");
        Moderate_option.value =i;
        Moderate_option.text = i+" "+"Question";
        x.add(Moderate_option);
    }
 //get the value of the selected option
 $('#moderate').on('change', function() {
    Moderate_value=this.value;
  }); 

  }
 
 */


})

/*$(document).ready(function () {
 var Questions = 100;
 var questions_value=1;
 var single_value=1;
 var written_value=1;
 var multiple_value=1;
 var true_false_value=1;
 var Hard_value=1;
 var Easy_value=1;
 var Moderate_value=1;




    Num_Questions() 
    function Num_Questions(){
        for(var i=1;i<=Questions;i++){
            var x = document.getElementById("Question_Number");
            var option = document.createElement("option");
            option.value =i;
            option.text = i+" "+"Question";
            x.add(option);
        }
     //get the value of the selected option
    $('#Question_Number').on('change', function() {
        questions_value=this.value;
      });
      }

      Single() 
    function Single(){
        for(var i=1;i<=Questions;i++){
            var x = document.getElementById("single_mcq");
            var single_option = document.createElement("option");
            single_option.value = i;
            single_option.text = i+" "+"Question";
            x.add(single_option);
        }

        //get the value of the selected option
    $('#single_mcq').on('change', function() {
        single_value=this.value;
      });  
      }


    Multiple() 
    function Multiple(){
        for(var i=1;i<=Questions;i++){
            var x = document.getElementById("multiple_mcq");
            var option = document.createElement("option");
            option.value = i;
            option.text = i+" "+"Question";
            x.add(option);
        }

        //get the value of the selected option
    $('#multiple_mcq').on('change', function() {
        multiple_value=this.value;
      }); 
    }

    Written() 
    function Written(){
        for(var i=1;i<=Questions;i++){
            var x = document.getElementById("written");
            var option = document.createElement("option");
            option.value = i;
            option.text = i+" "+"Question";
            x.add(option);
        }

     //get the value of the selected option
    $('#written').on('change', function() {
        written_value=this.value
      }); 
    }


    True_False() 
    function True_False(){
        for(var i=1;i<=Questions;i++){
            var x = document.getElementById("true_false");
            var option = document.createElement("option");
            option.value = i;
            option.text = i+" "+"Question";
            x.add(option);
        }

     //get the value of the selected option
    $('#true_false').on('change', function() {
        true_false_value=this.value
      }); 
    }

    Hard_questions() 
    function Hard_questions(){
        for(var i=1;i<=Questions;i++){
            var x = document.getElementById("hard");
            var option = document.createElement("option");
            option.value = i;
            option.text = i+" "+"Question";
            x.add(option);
        }

     //get the value of the selected option
    $('#hard').on('change', function() {
        Hard_value=this.value
        console.log(Hard_value)
       }); 
    }

    Easy_questions() 
    function Easy_questions(){
        for(var i=1;i<=Questions;i++){
            var x = document.getElementById("easy");
            var option = document.createElement("option");
            option.value = i;
            option.text = i+" "+"Question";
            x.add(option);
        }

     //get the value of the selected option
    $('#easy').on('change', function() {
        Easy_value=this.value
        console.log(Easy_value)

       }); 
    }

    Moderate_questions() 
    function Moderate_questions(){
        for(var i=1;i<=Questions;i++){
            var x = document.getElementById("moderate");
            var option = document.createElement("option");
            option.value = i;
            option.text = i+" "+"Question";
            x.add(option);
        }

     //get the value of the selected option
    $('#moderate').on('change', function() {
       Moderate_value=this.value
       console.log(Moderate_value)
       }); 
    }







    //validate

    $('#check').on('click', function() {
      sum=parseInt(single_value)+parseInt(written_value)+parseInt(multiple_value)+parseInt(true_false_value);
      type_sum = parseInt(Hard_value)+parseInt(Easy_value)+parseInt(Moderate_value);
      if(sum < questions_value || sum > questions_value){
      toastWarning("Make sure that the number of questions is equal to your selected options");

     }
     else if(type_sum < questions_value || type_sum > questions_value){
        toastWarning("Make sure that the total number of questions is equal to total of question types you selected");
      }

      else{
        toastSuccess("Done");
      }
    

  }); 

  });*/
