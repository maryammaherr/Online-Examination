/* buttons */
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


/*Doctor Search */
function doc_Search(){
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("doc_search");
  filter = input.value.toUpperCase();
  table = document.getElementById("doc_data_table");
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

/*students Search */
function stu_Search(){
	let input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("stu_search");
	filter = input.value.toUpperCase();
	table = document.getElementById("stu_data_table");
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

  /*Demons Search */
function demon_Search(){
	let input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("demon_search");
	filter = input.value.toUpperCase();
	table = document.getElementById("demon_data_table");
	tr = table.getElementsByTagName("tr");
  
	for(let i=0; i<tr.length ; i++){
		td = tr[i].getElementsByTagName("td")[0];
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


/* Doctors */
function doc_edit_row(no){
	document.getElementById("doc_edit_button"+no).style.display="none";
	document.getElementById("doc_save_button"+no).style.display="block";

	var doc_name = document.getElementById("doc_name_row"+no);
	var doc_country = document.getElementById("doc_country_row"+no);

	var doc_name_data = doc_name.innerHTML;
	var doc_country_data = doc_country.innerHTML;
	doc_name.innerHTML = "<input type='text' id='doc_name_text"+no+"' value='"+doc_name_data+"'>"
	doc_country.innerHTML = "<input type='text' id='doc_country_text"+no+"' value='"+doc_country_data+"'>"

}

function doc_save_row(no){
	var doc_name_val="";
	var doc_country_val="";
    doc_name_val = document.getElementById("doc_name_text"+no).value;
    doc_country_val = document.getElementById("doc_country_text"+no).value;
	document.getElementById("doc_name_row"+no).innerHTML=doc_name_val;
	document.getElementById("doc_country_row"+no).innerHTML=doc_country_val;
	document.getElementById("doc_edit_button"+no).style.display="block";
	document.getElementById("doc_save_button"+no).style.display="none";

}

function doc_delete_row(no) {document.getElementById("doc_row"+no+"").outerHTML="";}




/* Students  */
function stu_edit_row(no){
	document.getElementById("stu_edit_button"+no).style.display="none";
	document.getElementById("stu_save_button"+no).style.display="block";

	var stu_name = document.getElementById("stu_name_row"+no);
	var stu_country = document.getElementById("stu_country_row"+no);

	var stu_name_data = stu_name.innerHTML;
	var stu_country_data = stu_country.innerHTML;
	stu_name.innerHTML = "<input type='text' id='stu_name_text"+no+"' value='"+stu_name_data+"'>"
	stu_country.innerHTML = "<input type='text' id='stu_country_text"+no+"' value='"+stu_country_data+"'>"

}

function stu_save_row(no){
	var stu_name_val="";
	var stu_country_val="";
    stu_name_val = document.getElementById("stu_name_text"+no).value;
    stu_country_val = document.getElementById("stu_country_text"+no).value;
	document.getElementById("stu_name_row"+no).innerHTML=stu_name_val;
	document.getElementById("stu_country_row"+no).innerHTML=stu_country_val;
	document.getElementById("stu_edit_button"+no).style.display="block";
	document.getElementById("stu_save_button"+no).style.display="none";

}

function stu_delete_row(no) {document.getElementById("stu_row"+no+"").outerHTML="";}


/* Demons */
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


