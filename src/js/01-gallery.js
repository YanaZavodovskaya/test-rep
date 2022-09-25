import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryWrapper = document.querySelector('.gallery');
const createGallery = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" alt=${description} src=${preview} data-source=${original} width="350" height="300"/></a></div>
    `;
    }).join('');

}

galleryWrapper.insertAdjacentHTML('beforeend', createGallery);

galleryWrapper.addEventListener('click', openOriginImgClick); 

function openOriginImgClick(event) {
  event.preventDefault();
    const originalImgLink = event.target.dataset.source;
    const originalImgCreate = `<img src="${originalImgLink}" width="100%" height="100%">`
    const instance = basicLightbox.create(originalImgCreate);

    instance.show();

    window.addEventListener("keydown", originalImgClose);   
    function originalImgClose(event) {
    if (event.code === "Escape") {
    instance.close();
    }
    window.removeEventListener("keydown", originalImgClose);
}

}


 
  





    




