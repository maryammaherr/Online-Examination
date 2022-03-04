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



function authenticate(){
	let username=document.getElementById("username").value;
	let password=document.getElementById("password").value;
	if (username == "") 
		toastWarning("Username is empty!");
	else if (password == "") 
		toastWarning("Password is empty!");
	   else {
		$.ajax({
		  url: "https://localhost:44311/api/Authenticate/Login",
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
		  success: function (data) {
			  console.log(data.token);
			  localStorage.setItem('token', data.token);
			  window.location.replace("../html/main.html");
		  },
		  error: function(xhr,status,error){
			console.log(error);
			console.log(status);
			console.log(xhr.responseText);
			toastError("Wrong Credentials");
		  }
		});
	  }
}

