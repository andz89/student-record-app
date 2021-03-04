import "../css/style.scss";
import { Student} from './constructor.js';
import {UI} from './UI-class.js';
import {addStudentToList} from './addStudents.js';
import {getStudents} from './getStudents.js';

//listeners
const submit = document.querySelector("#submit")


//event: display students
document.addEventListener("DOMContentLoaded", getStudents())

//event: add students
document.querySelector('#submit').addEventListener('click', (e)=>{
    e.preventDefault()
    //get form values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const id = document.querySelector("#id").value;
    
    //new student 
    const student = new Student(firstName, lastName, id);

    //validate data
    if(UI.validation(firstName, lastName, id) == true){

    //add student to list
    addStudentToList(student)
        
    //clear field after submition
    UI.clearFields()
  
    }

})

document.getElementById('student-form').addEventListener('keyup', function(e) {
    if (e.key === "Enter") {
        submit.click()
   
    }
  
});


//remove students
document.querySelector("#student-list").addEventListener('click', (e)=>{

    UI.deleteStudent(e.target)
})