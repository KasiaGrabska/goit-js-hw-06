//Math.random(): Generuje pseudolosową liczbę z zakresu od 0 (włącznie) do 1 (wyłącznie).
//Math.random() * 16777215: Mnoży wynik z poprzedniego kroku przez 16777215. W rezultacie otrzymujemy liczbę z zakresu od 0 do 16777214.999999.
//.toString(16): Konwertuje liczbę z poprzedniego kroku na string w systemie szesnastkowym. Dzięki temu uzyskujemy reprezentację liczby jako ciągu znaków składającego się z cyfr 0-9 i liter A-F.
//.padStart(6, '0'): Jeśli uzyskany string ma mniej niż 6 znaków, dodaje z przodu tyle zer, aby osiągnąć długość 6 znaków. W rezultacie zawsze uzyskujemy string składający się z dokładnie 6 znaków, co odpowiada kolorowi w formacie szesnastkowym.
//`#${...}`: Tworzy string, który zaczyna się od znaku #, co jest charakterystyczne dla kolorów w formacie szesnastkowym, a następnie dołącza uzyskany string z poprzednich kroków, reprezentujący kolor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//deklarujemy zmienną za pomocą, której dostajemy się do body, w którym znajduje się klasa z wartością 'change-color'
const changeColor = document.querySelector(".change-color");
//deklarujemy zmienną za pomocą, której dostajemy się do diva, w którym znajduje się klasa z wartością 'widget'
const widgetColor = document.querySelector(".widget");
//deklarujemy zmienną za pomocą, której dostajemy się do span, w którym znajduje się klasa z wartością 'color'
const spanColor = document.querySelector(".color");

//dla przycisku tworzymy zdarzenie click, które ma zwracać callback w postaci zmienionego randomowego koloru body, czyli całego okna
changeColor.addEventListener("click", () => {
  //zmienna, której przypiasana jest  funkcja zmiany randomowego koloru
  const randomColor = getRandomHexColor();
  //następuje zmiana koloru tła
  document.body.style.backgroundColor = randomColor;
  //następuje zmiana tekstu na odpowiedni zapis hexadecymalny (szesnastkowy)
  spanColor.textContent = randomColor;
});
