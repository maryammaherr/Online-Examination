$(document).ready(function(){


    authorizeUser(getUserRole(),ROLES.PROFESSOR);
    
    document.getElementById('log_out').addEventListener("click",Log_Out)
    document.getElementById('back').addEventListener("click",Back)
    
    
    function Back(){
        window.location.href=LINKS.PROFESSOR_COURSES;
      }  

    function getbyID(id){
        return document.getElementById(id)
    }

    function check_radio(n){
        switch(n) {
            case 1:
                $('#radio3').prop('checked', true); 
                break;
            case 2:
                $('#radio1').prop('checked', true);
                questionbanktype="mcq";
                break;
            case 3:
                $('#radio2').prop('checked', true);
                questionbanktype="written";
                break;
            default:
               $('#radio1').prop('checked', false);
               $('#radio2').prop('checked', false);
               $('#radio3').prop('checked', false);
              // code block
        }
    }
    
    function get_dataset(data){
        let dataset=[]

        for(let i=0;i<data.length;i++){

            dataset.push(Object.values(data[i]))
        }

        return dataset
    }

    function fill_table(data){
        //console.log(Array.from(data))
        //console.log(Object.keys(data[0]))
        //console.log(get_dataset(data));

        let columns=[]
        columnNames = Object.keys(data[0]);
        for (var i in columnNames) {
            columns.push({
               // data: columnNames[i],
                title: columnNames[i]
            });
        }
        $("#data-table").html(data_table)
        $('#example').DataTable( {
                data: get_dataset(data),
                columns: columns,
                "lengthMenu": [[5,10, 25, 50, -1], [5,10, 25, 50, "All"]]
            } );
    }

    function uploadQuestionBank(){
        if(!is_ok)
        {
            toastError("Input is invalid");
            return;
        }

        var formData = new FormData();
        formData.append("file", csvToUpload);

        modifyBtnState("btn-submit",true);
        toastSuccess("Uploading...")
        axios({
            method: 'post',
            url: 'http://localhost:8241/api/QuestionBank/UploadQuestionBank',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            params:{
                course_id:getCourseId(),
                questionBankType:questionbanktype
            },
            data:formData
          }).then(function(response) {
                toastSuccess(response.data.message);
                getRecordsCount(getCourseId())
                console.log(response);
          }).catch(function(error){
              toastError(error)
              console.log(error);
          }).finally(() => {
             modifyBtnState("btn-submit",false)
          });

    }

    function modifyBtnState(id,isDisable){
        $("#"+id).prop('disabled', isDisable);
    }

    function deleteQuestionBank(course_id){

        axios({
            method: 'delete',
            url: 'http://localhost:8241/api/QuestionBank/DeleteQuestionsById',
            params:{
                course_id:course_id
            }
          }).then(function(response) {
                getRecordsCount(getCourseId())
                toastWarning(response.data.message);
                //console.log(response.data.message);

          }).catch(function(error){

              toastError(error)
              //console.log();
          });
    }

    function setRecordsCount(val){
        //alert(val);
        $("#lbl-questionbank-count").text(val) 
    }
    function getRecordsCount(course_id){
        axios({
            method: 'get',
            url: 'http://localhost:8241/api/QuestionBank/GetQuestionsById',
            params:{
                course_id:course_id
            }
          }).then(function(response) {
            
            setRecordsCount(response.data.data.records_count)
            console.log(response.data.message);

          }).catch(function(error){

              toastError(error)
              //console.log();
          });
    }

    function onPageLoad(){
        console.log(getCourseName());
        setCourseNameHTML(getCourseName());
        is_ok=false;
        check_radio(-1);
        getbyID('my-awesome-dropzone').dropzone.removeAllFiles();
        getRecordsCount(getCourseId());
    }

    getbyID('my-awesome-dropzone').dropzone.on("addedfiles", function(files) {
        
        var file = files[0];
        var read = new FileReader();

        read.readAsBinaryString(file);

        read.onloadend = function(){
            //console.log(read.result);

            const pojo = new ExcelParser(read.result,file.name);
                pojo.getJSON()
                .then( (data) => { 
                    csvToUpload  = new Blob([data.csvFile],{type: 'text/csv;charset=utf-8;'});
                    //csvToUpload=data.csvFile;
                    is_ok=true;
                    fill_table(data.Jsondata)
                    check_radio(data.file_type) 
                    toastSuccess("Valid File");
                }).
                catch(err => {
                    console.error(err);          
                    toastError(err);
                    onPageLoad();
                }
            );
        }

    });

    $('#btn-clear').click(function(){
        $("#btn-dismiss-clearmodal").click();
        deleteQuestionBank(getCourseId());
        onPageLoad();
    });

    $('#btn-submit').click(function(){
        uploadQuestionBank();
        onPageLoad();
    });


    function setCourseNameHTML(name){
        $("#course-name").html(name);
    }
    //-----------------main----------------------

    var is_ok=false;
    var data_table=$("#data-table").html();
    var questionbanktype;
    var csvToUpload;

    
    onPageLoad();
    

    //set course id
    //set course name

});