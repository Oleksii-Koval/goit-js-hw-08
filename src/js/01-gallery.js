// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('afterbegin', markup(galleryItems));


function markup(arr) {
    return arr.map(({ preview, original, description }) => `
   <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `).join('')
};


const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});


// console.log(galleryItems);
