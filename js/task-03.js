const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulGallery = document.querySelector(".gallery");

const imgGallery = images
  // metoda map iteruje po tablicy images
  .map(
    (image) =>
      //szablon łańcuchowy tworzący element listy `<li></li>` z zagniedzdzonym znacznikiem `<img>`
      `<li class = "gallery-item">
  <img src = "${image.url}" alt = "${image.alt}">
</li>` //
  )
  //łączy tablicę łańcuchów w jeden ciąg znaków ( układałyby się jeden pod drugim)
  .join("");
ulGallery.insertAdjacentHTML("beforeend", imgGallery); //metoda dodaje je do istniejącego elementu galerii w drzewie DOM, zakładając istnienie elementu HTML o klasie "gallery".
