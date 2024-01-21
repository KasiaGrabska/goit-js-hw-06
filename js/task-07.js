const fontSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

//wprowadzamy metodę, która ma wywołać zdarzenie i zwrócić callback w postaci zmiany stylu inline na właściwość font-size
fontSize.addEventListener("input", () => {
  // zmienna której przypisana jest wartosc wielkości czcionki wraz z dodaniem stringa "px" (bez tego czcionka nie ulegnie zmianie)
  const changeStyle = fontSize.value + "px";
  //następuje zmiana stylu font size wraz ze zmianą suwaka
  spanText.style.fontSize = changeStyle;
});
