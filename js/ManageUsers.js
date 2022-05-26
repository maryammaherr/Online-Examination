window.addEventListener('load', function(){



//	authorizeUser(getUserRole(),ROLES.ADMIN);

document.getElementById('log_out').addEventListener("click",Log_Out)
document.getElementById('back').addEventListener("click",Back)

	document.getElementById('doc').addEventListener("click",()=> 
	fill_Table('http://hemajoo5333-001-site1.gtempurl.com/api/Authenticate/GetAllProfessors')
	);
   document.getElementById('stu').addEventListener("click",()=> 
   fill_Table('http://hemajoo5333-001-site1.gtempurl.com/api/Authenticate/GetAllStudents')
   );

	document.getElementById('search').addEventListener('keyup',Search_fun);

	document.getElementById('id').addEventListener('click',handleChange);
	document.getElementById('first_name').addEventListener('click',handleChange);
	document.getElementById('last_name').addEventListener('click',handleChange);
	document.getElementById('user_name').addEventListener('click',handleChange);


	function Back(){
		window.location.href=LINKS.ADMIN_PAGE;
	  }  

	var num=0;
	var selected =document.querySelector('input[name="option"]:checked').value;


function handleChange() {
    selected = document.querySelector('input[name="option"]:checked').value;

	 if(selected=="firstname"){
		num=1;
	}
	else if(selected=="lastname"){
		num=2
	}
	else if(selected=="username"){
		num=3;
	}
	else{
		num=0;
	}

}





		/*Search */
	function Search_fun(){
		let input, filter, table, tr, td, txtValue;
		input = document.getElementById("search");
		filter = input.value.toUpperCase();
		table = document.getElementById("data_table");
		tr = table.getElementsByTagName("tr");
	
		for(let i=0; i< tr.length ; i++){
			td = tr[i].getElementsByTagName("td")[num]; //col number
			if(td){
				txtValue = td.textContent || td.innerText;
				if(txtValue.toUpperCase().indexOf(filter) > -1 ){
					tr[i].style.display="";
				}
				else{
				tr[i].style.display="none";
				}
			}
		}
	}
  






function fill_Table(link){
	document.getElementById('radioDiv').style.display="flex";
	document.getElementById('search').style.display="block";

	axios.get(link, {
	  /*params: {
	   //id: 1,
	  }*/
	 }).then(function(resp){
		ParseJson(resp.data.data);
  
	  })
	  .catch(function(error){
		console.log(error);
	  })

  }
 
 function ParseJson(data){
	let tbody=document.getElementById('body');
	tbody.innerHTML="";
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
	var td5 = document.createElement("td");
	var td6 = document.createElement("td");
	var td7 = document.createElement("td");



	var pan_button = document.createElement("button");
    pan_button.innerHTML = "BAN";
    pan_button.id = obj.id;
    pan_button.addEventListener("click",()=>{
	    let copyobj=obj;
    	copyobj.status=true;
		Banstatus(obj.id,copyobj);
	}
	);
    pan_button.classList.add("pan");


    var unpan_button = document.createElement("button");
    unpan_button.innerHTML = " UNBAN";
    unpan_button.id = obj.id;
    unpan_button.addEventListener("click",()=>{
		let copyobj=obj;
		copyobj.status=false;
		unBanstatus(obj.id,copyobj);
	}
	);
    unpan_button.classList.add("unpan");

	td1.innerHTML = obj.id;
    tr.appendChild(td1);

    td2.innerHTML = obj.firstname;
    tr.appendChild(td2);

	td3.innerHTML = obj.lastname;
    tr.appendChild(td3);

	td4.innerHTML = obj.username;
    tr.appendChild(td4);

	td5.innerHTML = obj.isbanned?"BANNED":"UNBANNED";
    tr.appendChild(td5);

    td6.appendChild(pan_button);
    tr.appendChild(td6);

    td7.appendChild(unpan_button);
    tr.appendChild(td7);


    return tr;
}

//ban & unban

var askBan=false
function Banstatus(id,newobj){
    askBan=confirm("Are you sure you want to Ban this user?")
	console.log(askBan)


	if(askBan){
		axios({
			method: 'put',
			url: "http://hemajoo5333-001-site1.gtempurl.com/api/Authenticate/DisableUsername",
			params:{
				id:id
			},
			data:newobj
		}).then(function(){
			window.location.reload()
		})
		.catch(function(error){
			console.log(error);
		  })
   }
   else{
	   console.log("notbnd")
   }

}

asknotBan=false
function unBanstatus(id,newobj){
	asknotBan=confirm("Are you sure you want to UnBan this user?")
	console.log(asknotBan)
	if(asknotBan){
		axios({
			method: 'put',
			url: "http://hemajoo5333-001-site1.gtempurl.com/api/Authenticate/UnDisableUsername",
			params:{
				id:id
			},
			data:newobj
		}).then(function(){
			window.location.reload()
		})
		.catch(function(error){
			console.log(error);
		  })
   }
   else{
	   console.log("bnd")
   }
}






})


































/*

buttons

function doctor_fun(){
	document.getElementById("DoctorsDiv").style.display="block";
	document.getElementById("StudentsDiv").style.display="none";
	document.getElementById("DemonsDiv").style.display="none";
}

function students_fun(){
	document.getElementById("StudentsDiv").style.display="block";
	document.getElementById("DoctorsDiv").style.display="none";
	document.getElementById("DemonsDiv").style.display="none";
}

function demons_fun(){
	document.getElementById("DemonsDiv").style.display="block";
	document.getElementById("DoctorsDiv").style.display="none";
	document.getElementById("StudentsDiv").style.display="none";
}


function demon_edit_row(no){
	document.getElementById("demon_edit_button"+no).style.display="none";
	document.getElementById("demon_save_button"+no).style.display="block";

	var demon_name = document.getElementById("demon_name_row"+no);
	var demon_country = document.getElementById("demon_country_row"+no);

	var demon_name_data = demon_name.innerHTML;
	var demon_country_data = demon_country.innerHTML;
	demon_name.innerHTML = "<input type='text' id='demon_name_text"+no+"' value='"+demon_name_data+"'>"
	demon_country.innerHTML = "<input type='text' id='demon_country_text"+no+"' value='"+demon_country_data+"'>"

}

function demon_save_row(no){
	var demon_name_val="";
	var demon_country_val="";
    demon_name_val = document.getElementById("demon_name_text"+no).value;
    demon_country_val = document.getElementById("demon_country_text"+no).value;
	document.getElementById("demon_name_row"+no).innerHTML=demon_name_val;
	document.getElementById("demon_country_row"+no).innerHTML=demon_country_val;
	document.getElementById("demon_edit_button"+no).style.display="block";
	document.getElementById("demon_save_button"+no).style.display="none";

}

function demon_delete_row(no) {document.getElementById("demon_row"+no+"").outerHTML="";}
*/