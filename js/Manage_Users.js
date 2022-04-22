window.addEventListener('load', function(){

	document.getElementById('doc').addEventListener("click",fill_Table('https://62459b7c2cfed1881723c8a7.mockapi.io/Manage'));
   //document.getElementById('stu').addEventListener("click",)
  //document.getElementById('demon').addEventListener("click",)
	document.getElementById('search').addEventListener('keyup',Search_fun);

var status_value ="unpanned";

	/*Search */
function Search_fun(){
	let input, filter, table, tr, td, txtValue;
	input = document.getElementById("search");
	filter = input.value.toUpperCase();
	table = document.getElementById("data_table");
	tr = table.getElementsByTagName("tr");
  
	for(let i=0; i< tr.length ; i++){
		td = tr[i].getElementsByTagName("td")[1]; //roooow number
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
  




fill_Table();
function fill_Table(link){
	//document.getElementById("mainsDiv").style.display="block";

	axios.get(link, {
	  params: {
	   //id: 1,
	  }
	 })
	  .then(function(resp){
		ParseJson(resp.data);
  
	  })
	  .catch(function(error){
		console.log(error);
	  })
  }
 
 function ParseJson(data){
	let tbody=document.getElementById('body');
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

	var pan_button = document.createElement("button");
    pan_button.innerHTML = "PAN";
    pan_button.id = obj.id;
	pan_button.value="panned";
    pan_button.addEventListener("click",pan_row);
    pan_button.classList.add("pan");


    var unpan_button = document.createElement("button");
    unpan_button.innerHTML = " UNPAN";
    unpan_button.id = obj.id;
	unpan_button.value="unpanned";
    unpan_button.addEventListener("click",un_pan_row);
    unpan_button.classList.add("unpan");

	td1.innerHTML = obj.id;
    tr.appendChild(td1);

    td2.innerHTML = obj.name;
    tr.appendChild(td2);

	td3.innerHTML = obj.country;
    tr.appendChild(td3);

    td4.appendChild(pan_button);
    tr.appendChild(td4);

    td5.appendChild(unpan_button);
    tr.appendChild(td5);


    return tr;

   
	
	/*return`
	 <tr>
	 <td id="doc_name_row1">${obj.id}</td>
	 <td id="doc_country_row1">${obj.name}</td>
	 <td id="doc_country_row1">${obj.country}</td>
	 <td> <button type="button" class="btn btn-outline-dark"  id="doc_pan_button1"  onclick="doc_pan_row(1)">BAN</button>
	 </td>
	 <td> <button type="button" class="btn btn-outline-dark"  id="doc_un_pan_button1" onclick="doc_un_pan_row(1)">UNBAN</button>
	 </td>
	 </td>
   </tr>
	 `*/
}



//pan & unpan

function pan_row() {
	status_value="panned";
	axios({
        method: 'post',
        url: 'https://62459b7c2cfed1881723c8a7.mockapi.io/Manage',
        data:{
            status: status_value,
			
        }
    })

}
function un_pan_row() {
	status_value="unpanned";
	axios({
        method: 'post',
        url: 'https://62459b7c2cfed1881723c8a7.mockapi.io/Manage',
        data:{
            status: status_value,

        }
    })
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