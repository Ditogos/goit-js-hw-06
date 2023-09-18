const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.getElementById("ingredients");
const liElements = [];

ingredients.forEach((ingredient) => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  liElements.push(list);
});

ulElement.append(...liElements);

const stylesList = document.querySelector("#ingredients");
stylesList.style.listStyle = "none";
