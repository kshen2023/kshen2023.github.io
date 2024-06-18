

// 	Do not alter this comment block. 
// 	Only fill out the information below.
	
//    project 4
//     Name: Kang Shen
//     Date: 2023-12-01
//     Description: moose
	

function load (){
hideErrors();
document.getElementById("form").addEventListener("submit", validate);
}

function validate(e) {
	hideErrors();
	if (formHasErrors()) {
		e.preventDefault();
		return false;
	}
	return true;
}

function hideErrors() {
	let error = document.getElementsByClassName("error");
	for (let i = 0; i < error.length; i++) {
		error[i].style.display = "none";
	}
}

function resetForm(e) {
	if (confirm('Clear order?')) {
		hideErrors();
		document.getElementById("name").focus();
		return true;
	}
	e.preventDefault();
	return false;
}

function formHasErrors(){

	let errorFlag = false;

let name = document.getElementById("name");
let nameError = document.getElementById("name_error");
let nameValue = name.value;
if(nameValue == ""){
	nameError.style.display = "block";
	name.focus();
	errorFlag =  true;
  }

let phone = document.getElementById("phone");
let phoneError = document.getElementById("phone_error");
let phoneValue = phone.value;
let phoneFormatError = document.getElementById("phoneformat_error");
let phoneRegex = /^(\+?1\s?)?(\([2-9]\d{2}\)|[2-9]\d{2})[-.\s]?[2-9]\d{2}[-.\s]?\d{4}$/;
if (phoneValue == "") {
    phoneError.style.display = "block";
	phone.focus();
    errorFlag = true;
}

if (!phoneRegex.test(phoneValue)) {
    phoneFormatError.style.display = "block";
	phone.focus();
	phone.select();
    errorFlag = true;
}

let email = document.getElementById("email");
let emailError = document.getElementById("email_error");
let emailFormatError = document.getElementById("emailformat_error");

let emailValue = email.value;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailValue == "") {
    emailError.style.display = "block";
	email.focus();
    errorFlag = true;
}

if (!emailRegex.test(emailValue)) {
    emailFormatError.style.display = "block";
	email.focus();
	email.select();
    errorFlag = true;
}

let postal = document.getElementById("post");
let postalError = document.getElementById("post_error");
let postalValue = postal.value;

if (postalValue == "") {
    postalError.style.display = "block";
	postal.focus();
    errorFlag = true;
}else {
    // Reset styles when the input is not empty
    postalError.style.display = "none";
    postal.style.backgroundColor = '';  // Reset background color
    postal.style.color = '';  // Reset text color
}
// else{
//     postal.style.display = "none";
//     postal.style.backgroundColor = "";  
//     postal.style.color = "";
// }

let comment = document.getElementById("comment");
let commentError = document.getElementById("comment_error");
let commentValue = comment.value;
if(commentValue == ""){
	commentError.style.display = "block";
	comment.focus();
	errorFlag = true;
}else{
    commentError.style.display = "none";
    comment.style.backgroundColor = "";  
    comment.style.color = "";
}
  return errorFlag;
}

document.addEventListener("DOMContentLoaded", load);