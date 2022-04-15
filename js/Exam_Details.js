window.addEventListener('load', function(){
    document.getElementById('check').addEventListener("click",validate)

    
    var questions_value=1;
    var type_value=" Mixed ";
    var Hard_value=0;
    var Easy_value=0;
    var Moderate_value=0;

// Total Number of questions
fill_Quetions_Data()
 function fill_Quetions_Data()
 {
    axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details').then(resp => {
        document.getElementById('options').innerHTML=ParseJson(resp.data)
    });
    function ParseJson(data){
        let res="";
        for(let i=0;i<1;i++)
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
    
          });
      }


 }









  // type questions
fill_type_Data()
function fill_type_Data()
{
   axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details').then(resp => {
       document.getElementById('options').innerHTML=Parse_type_Json(resp.data)
   });
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
 
 

   //validate

   function validate() {

    axios({
        method: 'post',
        url: 'https://62459b7c2cfed1881723c8a7.mockapi.io/exam_Details',
        data:{
            questions:questions_value,
            type:type_value,
            hard:Hard_value,
            easy:Easy_value,
            moderate:Moderate_value,
        }
    })

    type_sum = parseInt(Hard_value)+parseInt(Easy_value)+parseInt(Moderate_value);
    if(type_sum < questions_value || type_sum > questions_value){
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
