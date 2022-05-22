//post to the server the token


//set,get course id

//set,get user model


const USER_DATA="USERDATA";
const USER_TOKEN="TOKEN";
const COURSE_ID="COURSEID";
const COURSE_NAME="COURSENAME";
const EXAM_DETAILS="EXAMDETAILS";
const EXAM_RESULT="EXAMRESULT";
const USER_ROLE="USERROLE";

/*user */
function setUserData(data){
    localStorage.setItem(USER_DATA, JSON.stringify( data ) );
}

function getUserData(){
    return JSON.parse(localStorage.getItem(USER_DATA));
}

function setUserRole(role){
    localStorage.setItem(USER_ROLE,role);
}
function getUserRole(){
    return localStorage.getItem(USER_ROLE)
}

/* course */
function setCourseId(id){
    localStorage.setItem(COURSE_ID, id );
}

function getCourseId(){
    return localStorage.getItem(COURSE_ID);
}

function setCourseName(name){
    localStorage.setItem(COURSE_NAME, name );
}

function getCourseName(){
    return localStorage.getItem(COURSE_NAME);
}


/*token */
function setToken(token){
    localStorage.setItem(USER_TOKEN, token );
}

function getToken(){
    return localStorage.getItem(USER_TOKEN);
}



/*auth-entication/orization */

function authenticateUser(controller_url){
    //send token
    
    //redirect to login with a toastError
    return true*false;
}

function loginRedirect(role){
    switch(role)
    {
        case ROLES.ADMIN:
            window.location.href=LINKS.ADMIN_PAGE
            break;
        case ROLES.STUDENT:
            window.location.href=LINKS.STUDENT_COURSES_PAGE
            break;
        case ROLES.PROFESSOR:
            window.location.href=LINKS.PROFESSOR_COURSES
            break;
        default:
            window.location.href=LINKS.UNAUTHORIZED_PAGE

    }
}
function authorizeUser(hisRole,targetRole){
    //get role by userid
    //redirect to a page with NOT ALLOWED error page
    //return true*false;
    if(hisRole!=targetRole)
        window.location.href=LINKS.UNAUTHORIZED_PAGE
}


/* student exam details */
function setExamDetails(examdetails){
    localStorage.setItem(EXAM_DETAILS, JSON.stringify(examdetails));
}

function getExamDetails(){
   return JSON.parse(localStorage.getItem(EXAM_DETAILS));
}



/* exam result */

function setExamResult(result){
    localStorage.setItem(EXAM_RESULT,JSON.stringify(result));
}

function getExamResult(){
    return JSON.parse(localStorage.getItem(EXAM_RESULT));
}

/*
 roles with link pages 
roles={
    "PROFESSOR":"../html/ProfessorCourses.html",
    "STUDENT":"../html/StudentCourses.html"
}
*/

/* logout */
function Log_Out(){
    localStorage.removeItem(USER_DATA);
    window.location.href=LINKS.LOGIN_PAGE;
}  

