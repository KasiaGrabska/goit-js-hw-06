//zmienna za pomocą której dostajemy się do wartości login będącej wartością właściwości class zamieszczonej w atrybucie form
const logForm = document.querySelector(".login-form");

//tworzymy zdarzenie dla submit i callbackiem w postaci funkcji handleSubmit
logForm.addEventListener('submit', (event) => {
    event.preventDefault();
    //event to obiekt a target to cel, w taki sposób doatniemy się do formularza form czyli nasz const logForm
    const form = event.target;
    //form to formularz (atrybut), elements to elementy, email to wartość dla właściwosci name (name = "email"), value to wartość wprowadzanych danych
    const login = form.elements.email.value;
    //form to formularz (atrybut), elements to elementy, email to wartość dla właściwosci name (name = "password"), value to wartość wprowadzanych danych
    const password = form.elements.password.value
    //jeśli pole email i password są puste zwraca komunikat
    if (login === "" || password === "") {

        alert ("All fields should filled in!");
        return;
    }
    //deklarujemy obiekt, którhy zawiera właściwości Login i Password, aby odwołać się do zmiennych email i password uzywamy słowa kluczowego this
    const object = {
        Login: `${this.email.value}`;
        Password: `${this.password.value}`;
    };

    console.log(object);
    // przez zastosowane, form.reset wymazujemy wprowadzone treści
    logForm.reset();
});

