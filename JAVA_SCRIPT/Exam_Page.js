$(document).ready(function () {
  
    var counter = 0;
    
    var json = [
      {
        q: "this is a mcq",
        answer: { a: "s",c:"er", b: "sgggg", d: "sffffsdf" },
        type: 1,
      },
      {
        q: "this is a m mm mcq",
        answer: { a: "gos", b: "uuiii", d: "oplooo" },
        type: 2,
      },
      {
        q: "this is a written",
        type: 3,
      },
      {
        q: "this is a tf ",
        answer: { a: "aaa", b: "bbbbbbbbbbb", d: "ssssssdf" },
        type: 4,
      },
    ];
  
    function injectToElement(id,content){
        $(id).html(content)
    }
  
    function getComponent(obj) {
      if (obj.type == 1) {
        return `


      <div class='Question_Area' >
        <div class='Questions'  >
        <div>
        Welcome ${obj.q}
       </div>
        <hr></hr>
        <div class='answers'>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="answer1" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${obj.answer.a}
        </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="answer2" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
            ${obj.answer.b}
            </label>
         </div>
         <div class="form-check">
            <input class="form-check-input" type="radio" name="answer2" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
            ${obj.answer.c}
         </label>
         </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="answer2" id="flexRadioDefault2">
        <label class="form-check-label" for="flexRadioDefault2">
        ${obj.answer.d}
        </label>
      </div>
        </div>
    
        
        </div>
               
                  `;
      } else if (obj.type == 2) {
        return `
        <div class='Question_Area' >
        <div class='Questions'  >
        <div>
        Welcome ${obj.q}
       </div>
        <hr></hr>
        <div class='answers'>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="answer1" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${obj.answer.a}
        </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="answer2" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
            ${obj.answer.b}
            </label>
         </div>
         <div class="form-check">
         <input class="form-check-input" type="radio" name="answer2" id="flexRadioDefault2">
         <label class="form-check-label" for="flexRadioDefault2">
         ${obj.answer.c}
         </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="answer2" id="flexRadioDefault2">
      <label class="form-check-label" for="flexRadioDefault2">
      ${obj.answer.d}
      </label>
      </div>
        </div>
        </div>
               
                  `;
      } else if (obj.type == 3) {
        return `
        <div class='Question_Area' >
        <div class='Questions'  >
        <div>
        Welcome ${obj.q}
       </div>
        <hr></hr>
        <div class='answers'>
////written
        </div>
        </div>
                  `;
      } else if (obj.type == 4) {
        return `

        <div class='Question_Area' >
        <div class='Questions'  >
        <div>
        Welcome ${obj.q}
       </div>
        <hr></hr>
        <div class='answers'>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="answer1" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${obj.answer.a}
        </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="answer2" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
            ${obj.answer.b}
            </label>
         </div>
        </div>
        

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
  });
  
  
  /*
  1 -> mcq
  2 -> multi mcq
  3 -> written
  4 -> t f
  
  */
  