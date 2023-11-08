// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];
// // const artlist = document.querySelector(".gallery");
// // const gallerylist = `<li class ="image">img src ="${images.url}" alt ="${images.alt}"</li>`;
// // artlist.insertAdjacentHTML("afterbegin", gallerylist);

// const gallery = document.querySelector("ul.gallery");

// const template = `
//   <div class="image">
//     <img src="${image.url}" alt="${image.alt}">
//   </div>
// `;

// gallery.insertAdjacentHTML("afterbegin", template.repeat(images.length));

// // Добавление минимального оформления галереи

// gallery.classList.add("grid");
// gallery.classList.add("gap-10");

// images.forEach((image) => {
//   image.querySelector("img").classList.add("w-full");
// });

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallerylist = document.querySelector(".gallery");

const galleryItems = images
  .map(
    (image) => `
    <li>
    <img src="${image.url}" alt="${image.alt}" width="500px">
  </li>`
  )
  .join("");

gallerylist.insertAdjacentHTML("beforeend", galleryItems);
