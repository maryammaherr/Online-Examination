$(document).ready(function () {
  var counter = 0;
  var json = [
    {
      q: "this is a mcq qqqqsamskaldsksdjclksdnhcjlkndscj kdsncljndsldiojcoidsjcidsjoci",
      answer: { a: "s", b: "er", c: "sgggg", d: "sffffh" },
      type: 1,
    },
    {
      q: "this is a m mm mcq",
      answer: { a: "gos", b: "uuiii", c: "sgggg", d: "oplooo" },
      type: 2,
    },
    {
      q: "this is a written",
      type: 3,
    },
    {
      q: "this is a tf ",
      answer: { a: "aaa", b: "bbbbbbbbbbb", c: "sgggg", d: "ssssssdf" },
      type: 4,
    },
  ];

  $.ajax({
      url: "http://localhost:8241/api/Exam/Examinate",
      type: "GET",
      data: {
        course_id: 4,
      },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
      },
      success: function (data) {
        console.log(data);
        json=data;
        init_body();
      },
      error: function (xhr, status, error) {
        console.log(error);
        console.log(status);
        console.log(xhr.responseText);
        //toastError("Wrong Credentials");
      },
  });

  function anchorClicked(idx) {
    //  injectToElement("#target",getComponent(json[idx]));
    $('div[id^="q-"]').addClass("hide-div");
    $(`#q-${idx}`).removeClass("hide-div");
    $("a").removeClass("active_question");
    $("a").eq(idx).addClass("active_question");
  }

  
  function init_body(){
    for (let i = 0; i < json.length; i++) {
      liA = document.createElement("a");
      liA.setAttribute("href", "#");
      liA.addEventListener(
        "click",
        function () {
          anchorClicked(i);
        },
        false
      );
      //link go to question
      list = document.createElement("li");
      liA.innerHTML = "Question " + (i + 1);
      list.appendChild(liA);
      document.getElementById("list-container").appendChild(list);
  
      //init questions
      const q_ele = document.createElement("div");
      q_ele.id = "q-" + i;
      q_ele.className = "anr_question";
      q_ele.innerHTML = getComponent(json[i]);
      document.getElementById("question-area").appendChild(q_ele);
    }
  
    anchorClicked(0);
  }

  function getComponent(obj) {
    tagger = guidGenerator();
    if (obj.qtype.toUpperCase() == "M") {
      return `

    <div class='anr_question'>

      <div class='Questions'  >
      <div class='question_hr'>
          ${obj.questionx}
      <hr ></hr>

      </div>
      </div>


      <div class='answers'>
      <div class="form-check">
      <input class="form-check-input" type="radio" value="a" name="answer${tagger}" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
          ${obj.a}
          </label>
      </div>
      <div class="form-check">
          <input class="form-check-input" type="radio" value="b" name="answer${tagger}" id="flexRadioDefault2">
          <label class="form-check-label" for="flexRadioDefault2">
          ${obj.b}
          </label>
      </div>
      <div class="form-check">
          <input class="form-check-input" type="radio" value="c" name="answer${tagger}" id="flexRadioDefault3">
          <label class="form-check-label" for="flexRadioDefault3">
          ${obj.c}
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" value="d" name="answer${tagger}" id="flexRadioDefault4">
      <label class="form-check-label" for="flexRadioDefault4">
           ${obj.d}
      </label>
      </div>
      </div>

      <div>

                   
                  `;
    } else if (obj.qtype.toUpperCase() == "Y") {
      return `
        <div class='anr_question'>

        <div class='Questions'  >
        <div class='question_hr'>
               ${obj.questionx}
        <hr ></hr>
  
        </div>
        </div>
  
  
        <div class='answers'>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="a" name="answer${tagger}" id="flexcheckboxefault1">
        <label class="form-check-label" for="flexcheckboxDefault1">
        ${obj.a}
        </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="b" name="answer${tagger}" id="flexcheckboxDefault2">
            <label class="form-check-label" for="flexcheckboxDefault2">
            ${obj.b}
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="c" name="answer${tagger}" id="flexcheckboxDefault3">
            <label class="form-check-label" for="flexcheckboxDefault3">
            ${obj.c}
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="d" name="answer${tagger}" id="flexcheckboxDefault4">
        <label class="form-check-label" for="flexcheckboxDefault4">
        ${obj.d}
        </label>
        </div>
        </div>
        
        <div>
  
               
                  `;
    } else if (obj.qtype.toUpperCase() == "W") {
      return `
        <div class='anr_question'>

        <div class='Questions'  >
        <div class='question_hr'>
         ${obj.questionx}
        <hr ></hr>
        </div>
        </div>
  
  
        <div class='answers'>
        <div class="form-group">
        <textarea class="form-control" value="nnn" id="textarea_answer" rows="4"></textarea>
       </div>
       </div>
            
        <div>
  
                  `;
    } else if (obj.qtype.toUpperCase() == "T" ) {
      return `
        <div class='anr_question'>

        <div class='Questions'  >
        <div class='question_hr'>
           ${obj.questionx}
        <hr ></hr>
  
        </div>
        </div>
  
  
          <div class='answers'>
          <div class="form-check" >
          <input class="form-check-input" type="radio" value="a" name="answer${tagger}" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
          ${obj.a}
          </label>
          </div>
          <div class="form-check">
              <input class="form-check-input" type="radio" value="b" name="answer${tagger}" id="flexRadioDefault2">
              <label class="form-check-label" for="flexRadioDefault2">
              ${obj.b}
              </label>
          </div>
          </div>
          <div>
   `;
    }

    return "";
  }

  function disableButtonById(id) {
    $(id).prop("disabled", true);
  }
  function enableButtonById(id) {
    $(id).prop("disabled", false);
  }
  function flagger(counter, n) {
    if (counter == 0) {
      disableButtonById("#btn-prev");
    } else if (counter == n - 1) {
      disableButtonById("#btn-next");
    } else {
      enableButtonById("#btn-next");
      enableButtonById("#btn-prev");
    }
  }

  const next = () => {
    if (counter < json.length) {
      counter++;
      anchorClicked(counter);
    }

    flagger(counter, json.length);
  };

  const prev = () => {
    if (counter > 0) {
      counter--;
      anchorClicked(counter);
    }

    flagger(counter, json.length);
  };

  // injectToElement("#target",getComponent(json[counter]));
  $("#btn-prev").click(prev);
  $("#btn-next").click(next);

  //onBlur
  var Blur_Count = 3;

  window.onblur = () => {
    Blur_Count--;
    //farcry(Blur_Count);
  };

  function farcry(Blur_Count) {
    if (Blur_Count > 0) {
      alert(
        `Please do not switch the exam window or open any application. You will be disqualified from the exam after ${Blur_Count} times`
      );
    } else {
      alert("Blocked");
    }
  }

  function guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }

  function get_user_data() {
    arr = [];
    for (let i = 0; i < json.length; i++) {
      let input_group = $("#q-" + i + " :input");

      if (input_group.length == 1) {
        arr.push(  
          { "id":json[i].id, 
            "answer":input_group.val().toString().trim(),
            "qtype":json[i].qtype
          }
        );
        //console.log($("#q-"+i).find("#textarea_answer").val());
      } else {
        let res = [];
        for (let i in input_group) {
          if (input_group[i].checked == true) res.push(input_group[i].value);
        }
        arr.push(
          { "id":json[i].id, 
            "answer":res.join(""),
            "qtype":json[i].qtype
          }
        );
      }
    }

    return arr;
  }

  function casper() {

    console.log(get_user_data());
        $.ajax({
          url: "http://localhost:8241/api/Exam/Examinate",
          type: "POST",
          data: JSON.stringify({
            "std_id": 0,
            "course_id": 4,
            "answers": get_user_data()
          }),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
          },
          success: function (data) {
            console.log(data);
          },
          error: function (xhr, status, error) {
            console.log(error);
            console.log(status);
            console.log(xhr.responseText);
            //toastError("Wrong Credentials");
          },
      });
    //console.log();
  }

  $("#Submit_button").click(casper);
});

/*timer*/

var myTimer;
function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 3600; //Initially set to 1 hour

  function myClock() {
    --c;
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
