let counterValue = 0;
const sum = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementbutton = document.querySelector('[data-action="increment"]');
sum.textContent = counterValue;
decrementButton.addEventListener("click", addElem);
incrementbutton.addEventListener("click", incremElem);
function addElem() {
  counterValue -= 1;
  sum.textContent = counterValue;
}
function incremElem() {
  counterValue += 1;
  sum.textContent = counterValue;
}
