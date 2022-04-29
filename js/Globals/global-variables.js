/* links */

const BASE_LINK="../html/";

const LINKS={
    "ADMIN_PAGE":BASE_LINK + "AdminPage.html",
    "EXAM_DETAILS_PAGE":BASE_LINK + "ExamDetails.html",
    "EXAM_PAGE":BASE_LINK + "ExamPage.html",
    "EXAM_TABLE_PAGE":BASE_LINK + "ExamTable.html",
    "LOGIN_PAGE":BASE_LINK +"Login.html",
    "MANAGE_USERS_PAGE":BASE_LINK +"ManageUsers.html",
    "NOT_FOUND_PAGE":BASE_LINK +"NotFound.html",
    "PROFESSOR_COURSES":BASE_LINK +"ProfessorCourses.html",
    "FORBIDDEN_PAGE":BASE_LINK +"",
    "QUESTION_BANK":BASE_LINK + "QuestionBank.html",
    "RESULT_PAGE": BASE_LINK +"ResultPage.html",
    "STUDENT_COURSES_PAGE": BASE_LINK +"StudentCourses.html",
}


const API_BASE="http://localhost:8241/";

const API_LINKS={
    "GET_PROFESSSOR_COURSES":API_BASE+"api/Course/ProfessorCourses",
    "GET_EXAM_DETAILS":API_BASE+'api/Exam/GetExamDetails',
    "PUT_EXAM_DETAILS":API_BASE+'api/Exam/PutExamDetails',
    "POST_EXAM_DETAILS":API_BASE+'api/Exam/PostExamDetails'

}

var ROLES={
    'PROFESSOR':'Professor',
    'ADMIN':"Admin",
    'STUDENT':"Student"
}



