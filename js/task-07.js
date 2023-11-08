const inp = document.querySelector("#font-size-control");
const tex = document.querySelector("#text");
inp.addEventListener("input", inputfun);
function inputfun(event) {
  const Size = event.currentTarget.value + "px";
  tex.style.fontSize = Size;
}
