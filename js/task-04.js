// początkowa wartość zmiennej
let counterValue = 0;

//decrement = ubytek
const decrementButtonAction = document.querySelector(
  '[data-action="decrement"]'
);

// zmienna za pomoca której dostajemy się do właściwości i wartości atrybutu button poprzez uzycie nawiasów []
//increment = przyrost
const incrementButtonAction = document.querySelector(
  '[data-action="increment"]'
);

// zmienna za pomocą której dostajemy się do span
const valueSelector = document.querySelector("#value");

//zmiejszanie wartości licznika
decrementButtonAction.addEventListener("click", () => {
  counterValue -= 1;
  //za pomocą textContent zminiamy tekst atrybutu span  z 0 w zaleności od tego czy naciskamy na przycisk aby dodać albo usunąć wartość
  valueSelector.textContent = counterValue;
});

//zwiększanie wartości licznika
incrementButtonAction.addEventListener("click", () => {
  counterValue += 1;
  valueSelector.textContent = counterValue;
});
