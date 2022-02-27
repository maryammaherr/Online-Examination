
$(document).ready(function () {
  

    var counter = 0;
    
    var json = [
      {
        q: "this is a mcq qqqqsamskaldsksdjclksdnhcjlkndscj kdsncljndsldiojcoidsjcidsjoci",
        answer: { a: "s",b:"er", c: "sgggg", d: "sffffh" },
        type: 1,
      },
      {
        q: "this is a m mm mcq",
        answer: { a: "gos", b: "uuiii",  c: "sgggg", d: "oplooo" },
        type: 2,
      },
      {
        q: "this is a written",
        type: 3,
      },
      {
        q: "this is a tf ",
        answer: { a: "aaa", b: "bbbbbbbbbbb",  c: "sgggg", d: "ssssssdf" },
        type: 4,
      },
    ];

    window.onload = () => {
      for(let i=1;i<json.length+1;i++){
        liA = document.createElement("a");
        liA.setAttribute("href","");
        //link go to question
        list=document.createElement("li");
        liA.innerHTML = "Question"+i;
        list.appendChild(liA);
        document.getElementById('list-container').appendChild(list);


        
      }
    }
  
    function injectToElement(id,content){
        $(id).html(content)
    }
  
    function getComponent(obj) {
      if (obj.type == 1) {
        return `

<div class='anr_question'>

      <div class='Questions'  >
      <div class='question_hr'>
      Welcome ${obj.q}
      <hr ></hr>

      </div>
      </div>


      <div class='answers'>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="answer" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
      ${obj.answer.a}
      </label>
      </div>
      <div class="form-check">
          <input class="form-check-input" type="radio" name="answer" id="flexRadioDefault2">
          <label class="form-check-label" for="flexRadioDefault2">
          ${obj.answer.b}
          </label>
      </div>
      <div class="form-check">
          <input class="form-check-input" type="radio" name="answer" id="flexRadioDefault3">
          <label class="form-check-label" for="flexRadioDefault3">
          ${obj.answer.c}
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="answer" id="flexRadioDefault4">
      <label class="form-check-label" for="flexRadioDefault4">
      ${obj.answer.d}
      </label>
      </div>
      </div>

      <div>

                   
                  `;
      } else if (obj.type == 2) {
        return `
        <div class='anr_question'>

        <div class='Questions'  >
        <div class='question_hr'>
        Welcome ${obj.q}
        <hr ></hr>
  
        </div>
        </div>
  
  
        <div class='answers'>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" name="answer" id="flexcheckboxefault1">
        <label class="form-check-label" for="flexcheckboxDefault1">
        ${obj.answer.a}
        </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name="answer" id="flexcheckboxDefault2">
            <label class="form-check-label" for="flexcheckboxDefault2">
            ${obj.answer.b}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" name="answer" id="flexcheckboxDefault3">
            <label class="form-check-label" for="flexcheckboxDefault3">
            ${obj.answer.c}
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" name="answer" id="flexcheckboxDefault4">
        <label class="form-check-label" for="flexcheckboxDefault4">
        ${obj.answer.d}
        </label>
        </div>
        </div>
        
        <div>
  
               
                  `;
      } else if (obj.type == 3) {
        return `
        <div class='anr_question'>

        <div class='Questions'  >
        <div class='question_hr'>
        Welcome ${obj.q}
        <hr ></hr>
        </div>
        </div>
  
  
        <div class='answers'>
        <div class="form-group">
        <textarea class="form-control" id="textarea_answer" rows="4"></textarea>
       </div>
       </div>
            
        <div>
  
                  `;
      } else if (obj.type == 4) {
        return `
        <div class='anr_question'>

        <div class='Questions'  >
        <div class='question_hr'>
        Welcome ${obj.q}
        <hr ></hr>
  
        </div>
        </div>
  
  
          <div class='answers'>
          <div class="form-check">
          <input class="form-check-input" type="radio" name="answer" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
          ${obj.answer.a}
          </label>
          </div>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" id="flexRadioDefault2">
              <label class="form-check-label" for="flexRadioDefault2">
              ${obj.answer.b}
              </label>
          </div>
          </div>
          <div>
   `;
      }
  
      return "";
    }
  
    function disableButtonById(id){
      $(id).prop('disabled', true);
    }
    function enableButtonById(id){
      $(id).prop('disabled', false);
    }
    function flagger(counter,n){
      if(counter==0)
      {
          disableButtonById("#btn-prev");
      }
      else if(counter==n-1)
      {
      disableButtonById("#btn-next");
      }
      else{
          enableButtonById("#btn-next");
          enableButtonById("#btn-prev");
      }
       
    }
  
  
    const next = () => {
      if (counter < json.length) {
        counter++;
        injectToElement("#target",getComponent(json[counter]));
        
      } 
  
      flagger(counter,json.length);
    };
  
    const prev = () => {
      if (counter > 0) {
        counter--;
        injectToElement("#target",getComponent(json[counter]));
      } 
  
      flagger(counter,json.length);
    };
  
  
    injectToElement("#target",getComponent(json[counter]));
    $("#btn-prev").click(prev);
    $("#btn-next").click(next);
  
  


    //onBlur
  var Blur_Count = 3;

  window.onblur=() =>{
  Blur_Count--;
  farcry(Blur_Count);
  };

 
    function farcry(Blur_Count){
      if(Blur_Count > 0){
  
            alert(`Please do not switch the exam window or open any application. You will be disqualified from the exam after ${Blur_Count} times`);
      }
      else{
         
            alert('Blocked');
          
      }
    }
   
  

    
});



  

  

  /*timer*/


  var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = 3600; //Initially set to 1 hour


    function myClock() {
        --c
        var seconds = c % 60; // Seconds that cannot be written in minutes
        var secondsInMinutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
        var minutes = secondsInMinutes % 60; // Minutes that cannot be written in hours
        var hours = (secondsInMinutes - minutes) / 60;

 // Display the result in the element with id="demo"
 document.getElementById("hours").innerHTML = hours;
 document.getElementById("minutes").innerHTML = minutes;
 document.getElementById("seconds").innerHTML = seconds;

    }
}
clock();



  /*
  1 -> mcq
  2 -> multi mcq
  3 -> written
  4 -> t f
  
  */



 
