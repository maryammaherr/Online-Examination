window.addEventListener('load', function(){

	document.getElementById('doc').addEventListener("click",fill_Table)
  //  document.getElementById('stu').addEventListener("click",)
  //  document.getElementById('demon').addEventListener("click",)
  window.onload=function(){
	document.getElementById('search').addEventListener('keyup',Search_fun)

	/*Search */
function Search_fun(){
	let input, filter, table, tr, td, txtValue;
	input = document.getElementById("search");
	filter = input.value.toUpperCase();
	table = document.getElementById("data_table");
	tr = table.getElementsByTagName("tr");
  
	for(let i=0; i< tr.length ; i++){
		td = tr[i].getElementsByTagName("td")[0]; //roooow number
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
  

}


fill_Table();
 function fill_Table(){
	 document.getElementById('mainsDiv').style.display="block"

    axios.get('https://62459b7c2cfed1881723c8a7.mockapi.io/Manage').then(resp => {
        //fill table
    document.getElementById('body').innerHTML=ParseJson(resp.data)
  });
 }

 function ParseJson(data){
    let res="";
    for(let i=0;i<data.length;i++)
    {
        res+=AddDataTable(data[i])
    }
    return res;
}

 function AddDataTable(obj){
     return`
	 <tr>
	 <td id="doc_name_row1">${obj.id}</td>
	 <td id="doc_country_row1">${obj.name}</td>
	 <td id="doc_country_row1">${obj.country}</td>
	 <td> <button type="button" class="btn btn-outline-dark"  id="doc_pan_button1"  onclick="doc_pan_row(1)">PAN</button>
	 </td>
	 <td> <button type="button" class="btn btn-outline-dark"  id="doc_un_pan_button1" onclick="doc_un_pan_row(1)">UNPAN</button>
	 </td>
	 </td>
   </tr>
	 `
}



//pan & unpan

function pan_row(no) {
	document.getElementById("doc_row"+no+"").style.textDecoration="line-through";
	document.getElementById("doc_pan_button"+no).style.display="none";
    document.getElementById("doc_un_pan_button"+no).style.display="block";
}
function un_pan_row(no) {
	document.getElementById("doc_row"+no+"").style.textDecoration="none";
	document.getElementById("doc_pan_button"+no).style.display="block";
    document.getElementById("doc_un_pan_button"+no).style.display="none";
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