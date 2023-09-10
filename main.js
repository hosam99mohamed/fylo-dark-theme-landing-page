let form = document.querySelector("main .sign-up form");
let input = document.querySelector("main .sign-up form .email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEmail(input.value)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
});

function validateEmail(email) {
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
