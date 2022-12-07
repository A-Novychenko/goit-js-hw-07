import {galleryItems} from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCardsMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems.reduce((acc, {preview, original, description}) => {
    return (acc += ` <a class="gallery__item" href="${original}">
                  <img
                       class="gallery__image"
                       src="${preview}"
                       alt="${description}"
                   />
                </a>`);
  }, "");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  alertError: false,
});
