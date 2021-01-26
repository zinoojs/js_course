const tpw = document.querySelector("#togglePassword");
const pw = document.querySelector("#password");
tpw.addEventListener("click", function (e) {
  // toggle the type attribute
  const type = pw.getAttribute("type") === "password" ? "text" : "password";
  pw.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});
