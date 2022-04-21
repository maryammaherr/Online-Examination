window.addEventListener('load', function(){
  
    
    document.getElementById('Users').addEventListener("click",Manage_Users);
    document.getElementById('Schedule').addEventListener("click",Manage_Schedule);

   
  
    function Manage_Users(){
      window.location.replace("../html/Manage_Users.html")
    }  
    function Manage_Schedule(){
      window.location.replace("../html/Exam_Table.html")
    }  

    
        });
    