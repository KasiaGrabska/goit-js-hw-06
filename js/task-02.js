const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIng = document.querySelector("#ingredients");

const liArray = ingredients.map((ingredient) => {
  const li = document.createElement("li"); //<li></li>
  listItem.textContent = ingredient; //<li>Potatoes</li>
  liItem.classList.add("item"); //<li class="item">Potatoes</li>
  return liItem;
});
ulIng.append(...liArray);
