import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector ('.gallery');

galleryItems.forEach(function ({ preview, original, description }) {
    galleryEl.innerHTML += `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
  });

const onClickHandler = (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
      }
    const targetLink = e.target.dataset.source;

    const instance = basicLightbox.create(`
    <img width="1400" height="900" src="${targetLink}">
    `).show()
};

galleryEl.addEventListener('click', onClickHandler);
