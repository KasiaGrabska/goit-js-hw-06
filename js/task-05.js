const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

//metoda dodawania do zdarzenia input
//() oznacza callback, który jest otrzymywany w locie, czyli wpsiujemy imię i ono się automatycznie wyswietla
nameInput.addEventListener("input", () => {
  //uywamy value aby tekst wprowadzony przez uytkownika został wprowadzony i wyświetlona, nameInput.value to aktualna wartość wpisana do tego pola, jeśli string jest pusty wyświetli się informacja Anonymous
  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
    //w przeciwnym wypadku zostanie wprowadzona wartość (value) wprowadzanej treści
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
