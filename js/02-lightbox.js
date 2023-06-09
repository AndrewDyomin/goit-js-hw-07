import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector ('.gallery');

galleryItems.forEach(function ({ preview, original, description }) {
    galleryEl.innerHTML +=
  `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
  </li>`;
  });

  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
