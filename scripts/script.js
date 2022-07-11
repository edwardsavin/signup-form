function checkPasswordMatch() {
  let password1 = document.querySelector("#password");
  let password2 = document.querySelector("#confirm_password");
  let errorMessage = document.querySelector(".error-password");

  if (password2.value === "") {
    password1.classList.remove("not-matching");
    password2.classList.remove("not-matching");
    errorMessage.style.display = "none";
    password2.removeAttribute("onkeyup");
    password2.setAttribute("onfocusout", "checkPasswordMatch()");
  } else if (password1.value === password2.value) {
    password1.classList.remove("not-matching");
    password2.classList.remove("not-matching");
    password1.classList.add("matching");
    password2.classList.add("matching");
    errorMessage.style.display = "none";
  } else if (password1.value !== password2.value) {
    password1.classList.remove("matching");
    password2.classList.remove("matching");
    password1.classList.add("not-matching");
    password2.classList.add("not-matching");
    errorMessage.style.display = "block";
    password2.setAttribute("onkeyup", "checkPasswordMatch()");
  }
}
