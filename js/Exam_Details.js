$(document).ready(function () {
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
      alert("Wrong, make sure that the number of questions is qual to your selected options");

     }
     else if(type_sum < questions_value || type_sum > questions_value){
        alert("Wrong, make sure that the number of Type of questions is qual to your selected options");
      }

      else{
        alert("Done");
      }
    

  }); 

  });
