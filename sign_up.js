mySpan.textContent = currentYear;

// my password
const look = document.querySelector(".look");
const noLook = document.querySelector(".noLook");
const myPassword = document.getElementById("password");

noLook.addEventListener("click", () => {

  myPassword.type = "text";
  noLook.classList.add("hide");
  look.classList.remove("hide");
});
look.addEventListener("click", () => {
  myPassword.type = "password";
  noLook.classList.remove("hide");
  look.classList.add("hide");

});
