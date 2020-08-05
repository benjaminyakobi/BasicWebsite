// const togglePassword = document.querySelector('#togglePassword');
// const togglePasswordRpt = document.querySelector('#togglePassword-rpt');

// const password = document.querySelector('#password');
// const rptpassword = document.querySelector('#psw-repeat');


// togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye slash icon
//     this.classList.toggle('fa-eye-slash');
// });

// togglePasswordRpt.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = rptpassword.getAttribute('type') === 'password' ? 'text' : 'password';
//     rptpassword.setAttribute('type', type);
//     // toggle the eye slash icon
//     this.classList.toggle('fa-eye-slash');
// });

var toggle  = document.getElementById("toggle");
var content = document.getElementById("content");

toggle.addEventListener("click", function() {
  content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});