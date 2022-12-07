import {galleryItems} from "./gallery-items.js";

console.log(galleryItems);

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

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );

  window.addEventListener("keydown", onCloseModalKeypress);

  e.preventDefault();
  instance.show();

  function onCloseModalKeypress(e) {
    if (e.code !== "Escape") {
      return;
    }

    window.removeEventListener("keydown", onCloseModalKeypress);
    instance.close();
  }
}
