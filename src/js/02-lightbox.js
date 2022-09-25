import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryWrapper = document.querySelector('.gallery');

const createGallery = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    }).join('');
}

galleryWrapper.insertAdjacentHTML('beforeend', createGallery);

galleryWrapper.addEventListener('click', openOriginImgClick); 

function openOriginImgClick(event) {
  event.preventDefault();   

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    });
    
    lightbox.show();
}




