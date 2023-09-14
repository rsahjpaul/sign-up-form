let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
const form = document.getElementById("registration-form");


let submitButton = document.getElementById("submit");

submitButton.addEventListener("mousedown", () => {
  if (password.value !== confirmPassword.value) {
    console.log("hello");
    password.style.border = "2px solid red";
    confirmPassword.style.border = "2px solid red";
    
  }
});


form.addEventListener("submit", (event) => {
    if (password.value !== confirmPassword.value) {
      event.preventDefault(); 
    }
  });




