// zmianne za pomocą których dostajemy się do id inputu oraz wlasciwosci i jej wartosci
const validationInput = document.querySelector("#validation-input");
const lengthOfData = document.querySelector('[data-length="6"]');

//wprowadzamy metodę, która ma wywołać zdarzenie i zwrócić callback w postaci kolorów jeśli warunek zostanie spełniony
validationInput.addEventListener("blur", () => {
  // zmienna której przypisana jest wartosc długości
  const valueLength = validationInput.value.length;
  //jeśli wartość długości równa się 6 to zostaje usunieta klasa invalid z kolorem czerwonym
  validationInput.classList.toggle("valid", valueLength === 6);
  //jeśli wartość długości nie równa się 6 to zostaje usunieta klasa valid z kolorem zielonym
  validationInput.classList.toggle("invalid", valueLength !== 6);
});
