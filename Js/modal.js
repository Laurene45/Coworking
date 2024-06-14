// DOM elements modal
const modalbg = document.querySelector(".bground"); // background
const modalBtn = document.querySelectorAll(".modal-btn"); // clic btn : reveal the form
const closeModalBtn = document.querySelectorAll(".close"); // close form
const btnClose = document.querySelector(".btnclose"); // btn close form

// Form elements 
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const eMail = document.querySelector("#email");
const form = document.querySelector("#myform");
const validForm = document.querySelector(".form-validated");

// Validations input
let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;


//---SCENARIO JS ---
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.forEach((close) => close.addEventListener("click", closeModal));


disabledSubmitButton(); // Blocks the button before validation of Input


//FIRSTNAME
/* Ecouter l'évenènement par la méthode addEventListener() qui utilise les objets elements
On passe 2 arguments à la méthode : 
- le nom d’un évènement qu’on souhaite prendre en charge 
- le code à exécuter (une fonction) en cas de déclenchement de cet évènement.
ici: 
  évènement input et fonction non nommée.
  on ajoute le message d'erreur
  une condition If /else
  si le prénom est valide ou non
  on ajoute une fonction au champ pour dire au formulaire qu'elle est valide
*/

/* englis :
 Listen to the event using the addEventListener() method which uses elements objects
We pass 2 arguments to the method: 
- the name of an event that we wish to support 
- the code to execute (a function) if this event is triggered.
here: 
  input event and unnamed function.
  we add the error message
  an If /else condition
  if the first name is valid or not
  we add a function to the field to tell the form that it is valid
*/

firstName.addEventListener("input", function(){
  showError(firstName);
  isFirstNameValid = false;

  if (firstName.value.length >= 2){
    hideError(firstName);
    isFirstNameValid = true;
  }
  isFormValidate()
});


//LASTNAME
lastName.addEventListener("input", function(){
  showError(lastName);
  isLastNameValid = false;

  if (lastName.value.length >= 2){
    hideError(lastName);
    isLastNameValid = true;
  }
  isFormValidate()
});


//EMAIL
eMail.addEventListener("input", function(){
  showError(eMail);
  isEmailValid = false;

  if (validateEmail(eMail.value)){
    hideError(eMail);
    isEmailValid = true;
  }
  isFormValidate()
});


//--- Send Form Submit ---
form.addEventListener("submit", function(e) {
  e.preventDefault();
 
});

// --- close modal btn ---
btnClose.addEventListener("click",function(){
  closeModal();

});


// --- Close modal form (croix) ---
function closeModal() {
  modalbg.style.display = "none";
}


// --- Disable submit ---
function disabledSubmitButton(){
  document.querySelector(".btn-submit").disabled = true; // désactive par defaut submit tant que inptuts non validés
  document.querySelector(".btn-submit").style.opacity = 0.5;
  document.querySelector(".btn-submit").style.cursor = "not-allowed";
}

// --- Enable submit ---
function enableSubmitButton(){
  document.querySelector(".btn-submit").disabled = false; // réactive le bouton submit 
  document.querySelector(".btn-submit").style.opacity = 1;
  document.querySelector(".btn-submit").style.cursor = "grab";
}

// --- Hide error ---
function hideError(element){
  let parent = element.closest(".formData");
  parent.setAttribute("data-error-visible", false);
}

// --- Validate Form ---
function isFormValidate(){
  disabledSubmitButton();
  if(isFirstNameValid && isLastNameValid && isEmailValid){
    enableSubmitButton();
  }
}

// --- Launch modal form ---
function launchModal() {
  modalbg.style.display = "block";
}

// ---- show Error ---
function showError(element){
  let parent = element.closest(".formData");
  parent.setAttribute("data-error-visible", true);
}

// --- Validate submit ---
function validate(e) {
  document.querySelector(".form-validated").style.display = "block";
  form.style.display = "none";
}

// --- Input Email ---
function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}