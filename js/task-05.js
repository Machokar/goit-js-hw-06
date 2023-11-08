const gap = document.querySelector("#name-input");
const secgap = document.querySelector("#name-output");

gap.addEventListener("input", chandsize);
function chandsize(event) {
  secgap.textContent = event.currentTarget.value || "Anonymous";
}
