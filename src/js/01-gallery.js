import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from 'simplelightbox';
// import { markupGallery } from "./helpers";
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line



const galleryList = document.querySelector('.gallery');
galleryList.style.listStyle = 'none'

galleryList.insertAdjacentHTML('afterbegin', markupGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});

function markupGallery(arr) {
    return arr.map(({ preview, original, description }) => `
   <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `).join('')
};


// console.log(galleryItems);
