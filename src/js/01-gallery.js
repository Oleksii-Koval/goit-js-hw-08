import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from 'simplelightbox';
import { markupGallery } from "./helpers";
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


// console.log(galleryItems);
