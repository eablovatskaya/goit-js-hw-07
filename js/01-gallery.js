import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGaleryMarkup(galleryItems);

function createGaleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const isCard = evt.target.classList.contains("gallery__image");
  if (!isCard) {
    return;
  }
  const cardEl = evt.target;
  const cardData = cardEl.dataset.source;
  const instance = basicLightbox.create(`<img src="${cardData}" width="800" height="600"/>`);
  instance.show();
}
