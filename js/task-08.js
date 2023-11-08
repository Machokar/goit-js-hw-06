const form = document.querySelector(".login-form");
form.addEventListener("submit", formfun);
function formfun(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    alert("All fields must be completed");
  } else {
    const inf = {
      email: email.value,
      password: password.value,
    };
    console.log(inf);
  }
  form.reset();
}
