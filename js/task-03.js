// Напиши скрипт для создания галереи изображений по массиву данных. 
// В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов 
// <img> вложенных в <li>. Для создания разметки используй 
// шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами 
// или гридами через CSS классы.
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");

const galleryEl = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}"}></li>`)
  .join("");
console.log(galleryEl);
list.insertAdjacentHTML("afterbegin", galleryEl);

list.style.cssText = `
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding-left: 0;
  list-style: none;
`;

const itemsImg = document.querySelectorAll("img");
itemsImg.forEach(itemImg => {
  itemImg.classList.add("gallery__img");
});

const galleryImgs = document.querySelectorAll(".gallery__img");
galleryImgs.forEach(galleryImg => {
  galleryImg.style.cssText = `
width: 504px;
height: 300px;
`;
});
