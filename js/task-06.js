const inp = document.querySelector("#validation-input");
inp.addEventListener("blur", inviseinp);
function inviseinp(event) {
  const inper = event.currentTarget.value;
  const far = parseInt(inp.getAttribute("data-length"));
  if (inper.length === far) {
    inp.classList.remove("invalid");
    inp.classList.add("valid");
  } else {
    inp.classList.remove("valid");
    inp.classList.add("invalid");
  }
}
