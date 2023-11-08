const list = document.querySelector("#categories").querySelectorAll(".item");
const cat = list.length;
console.log(`Number of categories: ${cat}`);

list.forEach((category) => {
  const Categor = category.querySelector("h2").textContent;
  const IdCat = category.querySelectorAll("li").length;
  console.log(`Category: ${Categor}`);
  console.log(`Elements: ${IdCat}`);
});
