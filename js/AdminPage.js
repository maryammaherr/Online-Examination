window.addEventListener('load', function(){
  
    
    document.getElementById('Users').addEventListener("click",Manage_Users);
    document.getElementById('Schedule').addEventListener("click",Manage_Schedule);

   
  
    function Manage_Users(){
      window.location.href="../html/ManageUsers.html"
    }  
    function Manage_Schedule(){
      window.location.href="../html/ExamTable.html"
    }  

    
        });
    