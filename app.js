var toggle  = document.getElementById("toggle");
var content = document.getElementById("content");

toggle.addEventListener("click", function() {
  content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});

// var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("email").value;
var password = document.getElementById("password").value;
if (username == "formget" && password == "formget123"){
alert ("התחברת בהצלחה");
// window.location = "success.html"; // Redirecting to other page.
// return false;
}
else{
  alert ("כתובת מייל או סיסמא שגויים");
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
}
}