import {galleryItems} from "./gallery-items.js";

// Завдання 1 - галерея зображень
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання.
// Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти,
// доки відкрите модальне вікно.Бібліотека basicLightbox містить метод для програмного закриття модального вікна.
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCardsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({preview, original, description}) => {
      return `<div class="gallery__item">
               <a class="gallery__link" href="${original}">
                  <img
                       class="gallery__image"
                       src="${preview}"
                       data-source="${original}"
                       alt="${description}"
                   />
                </a>
            </div>
    `;
    })
    .join();
}

function onGalleryContainerClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const source = e.target.dataset.source;

  window.addEventListener("keydown", onCloseModalKeypress);

  e.preventDefault();
  // instance.show();
  controlModal(source);
}

const controlModal = crModal;

function crModal(source) {
  const instance = basicLightbox.create(
    `<img src="${source}" width="800" height="600">`
  );

  showModal();

  function showModal() {
    instance.show();
  }
  function closeModal() {
    instance.close();
  }

  return crModal;
}

function onCloseModalKeypress(e) {
  if (e.code === "Escape") {
    window.removeEventListener("keydown", onCloseModalKeypress);
    console.log("esc");
    // this.close();
    closeModal();
    return;
  }
  console.log("no esc");
}
//
///
///
//
//
//
//
//
//

// function onGalleryContainerClick(e) {
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }

//   const instance = basicLightbox.create(
//     `<img src="${e.target.dataset.source}" width="800" height="600">`
//   );

//   window.addEventListener("keydown", onCloseModalKeypress);

//   e.preventDefault();
//   instance.show();

//   function onCloseModalKeypress(e) {
//     if (e.code === "Escape") {
//       window.removeEventListener("keydown", onCloseModalKeypress);
//       console.log("esc");
//       instance.close();
//       return;
//     }
//     console.log("no esc");
//   }
// }
