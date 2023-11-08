const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientlist = document.querySelector("#ingredients");
ingredients.forEach((ing) => {
  const list = document.createElement("li");
  list.textContent = ing;
  list.classList.add("item");
  ingredientlist.append(list);
});
