
// UI Class: Handle UI Tasks
export class UI {
    
    //clear input field after submition
     static clearFields(){
         //focus in input firstname after submit
        const firstName = document.querySelector("#firstName")
        firstName.focus()


         document.querySelector("#firstName").value = "";
         document.querySelector("#lastName").value = "";
         document.querySelector("#id").value = "";
     }


     //remove students
     static deleteStudent(e){
         if(e.classList.contains('delete')){

            e.parentElement.parentElement.remove()
         }

     }
    //edit students
    static editStudent(e){
        if(e.classList.contains('delete')){

            e.parentElement.parentElement
        }

    }

     //validate data
     static validation(firstName, lastName, id){
 
        if(firstName ==="" || lastName ===""|| id ===""){
           UI.showAlert("Please complete the form","danger")
            return false

        }else{

            return true
        }
     }

     // Show alert

     static showAlert(message, className){

        const div = document.createElement('div');
        div.className = `show-alert position-absolute alert p-0 alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const studentForm = document.querySelector('#student-form');
        const formPadding = document.querySelector('.form-padding');
        studentForm.insertBefore(div, formPadding);
    
        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
     }
  
}