const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


function btnLoginClick(){
	doLogin();
}

function doLogin(){
	let username=document.getElementById("username").value;
	let password=document.getElementById("password").value;
	if (username == "") 
		toastWarning("Username is empty!");
	else if (password == "") 
		toastWarning("Password is empty!");
	else {

		$.ajax({
		  url: "http://localhost:8241/api/Authenticate/Login",
		  type: 'POST',
		  data: JSON.stringify({
			"username": username,
            "password": password
		  }),
		  dataType: 'json',
		  "headers": {
			'Content-Type':'application/json',
			"Access-Control-Allow-Origin":"*"
		  },
		  success: function (response) {
			  if(response.data==null){
				toastError("Wrong Credentials");
			  }
			  else{
				  
				setUserData(response.data.userDetails);
				setUserRole(response.data.role[0]);
				setToken(response.data.token);
				
				loginRedirect(getUserRole());
				
			  }
		  },
		  error: function(xhr,status,error){
			toastError(error);
		  }
		});
	  }
}

