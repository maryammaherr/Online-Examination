window.addEventListener('load', function(){
  
   // authorizeUser(getUserRole(),ROLES.ADMIN);
    
    document.getElementById('Users').addEventListener("click",Manage_Users);
    document.getElementById('Schedule').addEventListener("click",Manage_Schedule);
    document.getElementById('log_out').addEventListener("click",Log_Out)


   
  
    function Manage_Users(){
      window.location.href=LINKS.MANAGE_USERS_PAGE
    }  
    function Manage_Schedule(){
      window.location.href=LINKS.EXAM_TABLE_PAGE
    }  

    
        });
    