window.addEventListener('load', function(){
  
  document.getElementById('log_out').addEventListener("click",Log_Out)


  authorizeUser(getUserRole(),ROLES.PROFESSOR);
  

  console.log(getUserData());
  getProfessorCourses(API_LINKS.GET_PROFESSSOR_COURSES,getUserData().id);
  
 
  //“refresh page on back button click javascript” Code Answer
  window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || ( typeof window.performance != "undefined" && window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      // Handle page restore.
      //alert('refresh');
      window.location.reload();
    }
  });
  

  function ParseJson(data){
    let tbody=document.getElementById('table-body');

    for(let i=0;i<data.length;i++)
    {
        tbody.appendChild(AddDataTable(data[i]))
    }
    return tbody;
  }
    

  function AddDataTable(obj){
    var tr  = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");


    var Upload_button = document.createElement("button");
    Upload_button.innerHTML = "Question Bank";
    var btn_class=obj.isQuestionBankConfigured? "btn_green" :"btn_blue" 
    Upload_button.classList.add(btn_class);


    var Details_button = document.createElement("button");
    Details_button.innerHTML = " Exam Details";
 
    var btn_class2=obj.isExamdetailsConfigured? "btn_green" :"btn_blue" 
    Details_button.classList.add(btn_class2);
    
    Upload_button.addEventListener("click",()=>{
      setCourseId(obj.courseId)
      setCourseName(obj.courseName)
      //redirectTo(LINKS.QUESTION_BANK)
      window.location.href=LINKS.QUESTION_BANK
    })
    Details_button.addEventListener("click",()=>{
      setCourseId(obj.courseId)
      setCourseName(obj.courseName)
     // redirectTo(LINKS.EXAM_DETAILS_PAGE)
      window.location.href=LINKS.EXAM_DETAILS_PAGE
    })

    td1.innerHTML = obj.courseName;
    tr.appendChild(td1);

    td2.innerHTML = obj.courseCode;
    tr.appendChild(td2);

    td3.appendChild(Upload_button);
    tr.appendChild(td3);

    td4.appendChild(Details_button);
    tr.appendChild(td4);

    //td5.innerHTML= getConfigurationBadge(obj.isConfigured)
    //tr.appendChild(td5)
    
    return tr;


  }

  function getConfigurationBadge(status){
    if(status)
    return `<a href="#" class="badge badge-success">FINISHED</a>`

    return `<a href="#" class="badge badge-warning">NOT FINISHED</a>`
  }

  function hideLoading(id){
    $("#"+id).hide();
  }

  function getProfessorCourses(link,professor_id){
    
    axios.get(link, {
      params: {
        professor_id: professor_id,
      },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer "+ getToken()
      }
    })
      .then(function(resp){
        ParseJson(resp.data.data);
        hideLoading("please-wait");
        
        toastSuccess(resp.data.message);
      })
      .catch(function(error){
        console.log(error);
        toastError(error)
      })
  }
    

/*
    document.getElementById('log_out').addEventListener("click",Log_Out);
    document.getElementById('back').addEventListener("click",Back);


    function Log_Out(){
      window.location.href=LINKS.LOGIN_PAGE;
    }  

    function redirectTo(link){
      window.location.href=link;
    }  
  
*/
});

       


