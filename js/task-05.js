const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

//metoda dodawania do zdarzenia input

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() === "") {
    emptyOutpu.textContent = "Anonymous";
  } else {
    nameOutpu.text.Content = nameInput;
  }
});
