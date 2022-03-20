$(document).ready(function () {
 var Questions = 100;
 var questions_value=1;
 var single_value=1;
 var written_value=1;
 var multiple_value=1;
 var true_false_value=1;

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
        console.log(questions_value);
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
        console.log( single_value );
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
        console.log( multiple_value );
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
        console.log( written_value );
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
        console.log( true_false_value );
      }); 
    }

    $('#debug').on('click', function() {
      console.log(parseInt(questions_value) +parseInt(single_value)+parseInt(written_value)+parseInt(multiple_value)+parseInt(true_false_value));
    }); 


  });
