window.addEventListener('load', function(){
    document.getElementById('check').addEventListener("click",validate)

    var questions_value=1;
    var single_value=1;
    var multiple_value=1;
    var written_value=1;
    var true_false_value=1;
    var Hard_value=1;
    var Easy_value=1;
    var Moderate_value=1;

// Total Number of questions
fill_Quetions_Data()
 function fill_Quetions_Data()
 {
    axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details').then(resp => {
        document.getElementById('options').innerHTML=ParseJson(resp.data)
    });
 }
 function ParseJson(data){
    let res="";
    for(let i=0;i<data.length;i++)
    {
        res+=AddData(data[i])
    }
    return res;
}

function AddData(obj){
    var Questions = obj.total;
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
        axios({
            method: 'post',
            url: 'https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details',
            data:{
                questions:questions_value,
                singleMCQ:single_value,
                multiMCQ:multiple_value,
                written:written_value,
                true_false:true_false_value,
                hard:Hard_value,
                easy:Easy_value,
                moderate:Moderate_value,
            }
        })
      });
  }



// Single mcq questions
fill_Single_Data()
 function fill_Single_Data(){
    axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details').then(resp => {
        document.getElementById('options').innerHTML=Parse_single_Json(resp.data)
    });
 }
 function Parse_single_Json(data){
    let res="";
    for(let i=0;i<data.length;i++)
    {
        res+=Add_single_Data(data[i])
    }
    return res;
}

function Add_single_Data(obj){
    var Questions = obj.total;
    for(var i=1;i<=Questions;i++){
        var x = document.getElementById("single_mcq");
        var single_option= document.createElement("option");
        single_option.value =i;
        single_option.text = i+" "+"Question";
        x.add(single_option);
    }
 //get the value of the selected option
$('#single_mcq').on('change', function() {
    single_value=this.value;
        axios({
            method: 'post',
            url: 'https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details',
            data:{
                questions:questions_value,
                singleMCQ:single_value,
                multiMCQ:multiple_value,
                written:written_value,
                true_false:true_false_value,
                hard:Hard_value,
                easy:Easy_value,
                moderate:Moderate_value, singleMCQ:single_value,
            }
        })

  });

  
  }


  
// multiple mcq questions
fill_Multiple_Data()
function fill_Multiple_Data(){
   axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details').then(resp => {
       document.getElementById('options').innerHTML=Parse_Multiple_Json(resp.data)
   });
}
function Parse_Multiple_Json(data){
   let res="";
   for(let i=0;i<data.length;i++)
   {
       res+=Add_Multiple_Data(data[i])
   }
   return res;
}

function Add_Multiple_Data(obj){
   var Questions = obj.total;
   for(var i=1;i<=Questions;i++){
       var x = document.getElementById("multiple_mcq");
       var multiple_option= document.createElement("option");
       multiple_option.value =i;
       multiple_option.text = i+" "+"Question";
       x.add(multiple_option);
   }
//get the value of the selected option
$('#multiple_mcq').on('change', function() {
    multiple_value=this.value;
    axios({
        method: 'post',
        url: 'https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details',
        data:{
            questions:questions_value,
            singleMCQ:single_value,
            multiMCQ:multiple_value,
            written:written_value,
            true_false:true_false_value,
            hard:Hard_value,
            easy:Easy_value,
            moderate:Moderate_value,
        }
    })
 });
 }


  
// written questions
fill_written_Data()
function fill_written_Data(){
   axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details').then(resp => {
       document.getElementById('options').innerHTML=Parse_written_Json(resp.data)
   });
}
function Parse_written_Json(data){
   let res="";
   for(let i=0;i<data.length;i++)
   {
       res+=Add_written_Data(data[i])
   }
   return res;
}

function Add_written_Data(obj){
   var Questions = obj.total;
   for(var i=1;i<=Questions;i++){
       var x = document.getElementById("written");
       var written_option= document.createElement("option");
       written_option.value =i;
       written_option.text = i+" "+"Question";
       x.add(written_option);
   }
//get the value of the selected option
$('#written').on('change', function() {
    written_value=this.value;
    axios({
        method: 'post',
        url: 'https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details',
        data:{
            questions:questions_value,
            singleMCQ:single_value,
            multiMCQ:multiple_value,
            written:written_value,
            true_false:true_false_value,
            hard:Hard_value,
            easy:Easy_value,
            moderate:Moderate_value,
        }
    })
 });
 }

// true_false mcq questions
fill_true_false_Data()
function fill_true_false_Data(){
   axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details').then(resp => {
       document.getElementById('options').innerHTML=Parse_true_false_Json(resp.data)
   });
}
function Parse_true_false_Json(data){
   let res="";
   for(let i=0;i<data.length;i++)
   {
       res+=Add_true_false_Data(data[i])
   }
   return res;
}

function Add_true_false_Data(obj){
   var Questions = obj.total;
   for(var i=1;i<=Questions;i++){
       var x = document.getElementById("true_false");
       var true_false_option= document.createElement("option");
       true_false_option.value =i;
       true_false_option.text = i+" "+"Question";
       x.add(true_false_option);
   }
//get the value of the selected option
$('#true_false').on('change', function() {
    true_false_value=this.value;
    axios({
        method: 'post',
        url: 'https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details',
        data:{
            questions:questions_value,
            singleMCQ:single_value,
            multiMCQ:multiple_value,
            written:written_value,
            true_false:true_false_value,
            hard:Hard_value,
            easy:Easy_value,
            moderate:Moderate_value,
        }
    })
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
   for(let i=0;i<data.length;i++)
   {
       res+=Add_Hard_Data(data[i])
   }
   return res;
}

function Add_Hard_Data(obj){
   var Questions = obj.total;
   for(var i=1;i<=Questions;i++){
       var x = document.getElementById("hard");
       var hard_option= document.createElement("option");
       hard_option.value =i;
       hard_option.text = i+" "+"Question";
       x.add(hard_option);
   }
//get the value of the selected option
$('#hard').on('change', function() {
    Hard_value=this.value;
    axios({
        method: 'post',
        url: 'https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details',
        data:{
            questions:questions_value,
            singleMCQ:single_value,
            multiMCQ:multiple_value,
            written:written_value,
            true_false:true_false_value,
            hard:Hard_value,
            easy:Easy_value,
            moderate:Moderate_value,
        }
    })
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
   for(let i=0;i<data.length;i++)
   {
       res+=Add_Easy_Data(data[i])
   }
   return res;
}

function Add_Easy_Data(obj){
   var Questions = obj.total;
   for(var i=1;i<=Questions;i++){
       var x = document.getElementById("easy");
       var easy_option= document.createElement("option");
       easy_option.value =i;
       easy_option.text = i+" "+"Question";
       x.add(easy_option);
   }
//get the value of the selected option
$('#easy').on('change', function() {
    Easy_value=this.value;
    axios({
        method: 'post',
        url: 'https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details',
        data:{
            questions:questions_value,
            singleMCQ:single_value,
            multiMCQ:multiple_value,
            written:written_value,
            true_false:true_false_value,
            hard:Hard_value,
            easy:Easy_value,
            moderate:Moderate_value,
        }
    })
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
    for(let i=0;i<data.length;i++)
    {
        res+=Add_Moderate_Data(data[i])
    }
    return res;
 }
 
 function Add_Moderate_Data(obj){
    var Questions = obj.total;
    for(var i=1;i<=Questions;i++){
        var x = document.getElementById("moderate");
        var Moderate_option= document.createElement("option");
        Moderate_option.value =i;
        Moderate_option.text = i+" "+"Question";
        x.add(Moderate_option);
    }
 //get the value of the selected option
 $('#moderate').on('change', function() {
    Moderate_value=this.value;
    axios({
        method: 'post',
        url: 'https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details',
        data:{
            questions:questions_value,
            singleMCQ:single_value,
            multiMCQ:multiple_value,
            written:written_value,
            true_false:true_false_value,
            hard:Hard_value,
            easy:Easy_value,
            moderate:Moderate_value,
        }
    })
  });

  }
 
 

   //validate

   function validate() {
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
  

} 

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
