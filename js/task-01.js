// wypisze w koncoli liczbę kategorii w ul
const numberOfCategories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${numberOfCategories.length}`);

//iteracja po tablicy element po elemencie
//wywołanie callback(category) dla kaźdego elementu tablicy
//nic nie zwraca
numberOfCategories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li").length;
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
