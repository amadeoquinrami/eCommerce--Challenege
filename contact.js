const InputName = document.getElementById("name");
const InputEmail = document.getElementById("email");
const InputComment = document.getElementById("Comment");
// creating afunction and grabbiing it by ID 
const nameError = document.getElementById("err-name");
const emailError = document.getElementById("err-email");
const commentError = document.getElementById("err-comment");
// creating a function for error

const ContactForm = document.getElementById("Contact-form");
//  creating a function tto grab the id Form
ContactForm.addEventListener("submit", function(event){
    event.preventDefault(); // prevents the page froom submitting until the fields are filled.

    if (InputName.value.length < 3 || InputName.value.length > 13) {
        InputName.style.border = "2px solid red";
        nameError.textContent = ("Name is invalid");
        return;
    }
    if (InputEmail.value.length > 23  || InputEmail.value.length < 6) {
        InputEmail.style.border = "2px solid red";
        emailError.textContent = ("email is Too short or too long or needs an @");
        return;
    }
    if (!InputEmail.value.includes("@") ) {
        InputEmail.style.border = "2px solid red";
        emailError.textContent = ("Needs an '@'");
        return;
    }
    if (InputComment.value.length < 4 ) {
        InputComment.style.border = "2px solid red";
        commentError.textContent = ("comment is too short");
        return;
    }
    
        alert("Submitted! Thank you (*0*)/");
});




