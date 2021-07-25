
window.onload = () => {
    setGalleryImage();
}

let currentImageNumber = 1;
let totalImageCount = 2;

const setGalleryImage = () => {
    const galleryImage = document.querySelector('.gallery-image');
    galleryImage.src = `./img/gallery/${currentImageNumber}.jpg`;

    console.log('foo')
}

const prevoiusImage = document.querySelector('#previous-image');
const nextImage = document.querySelector('#next-image');

prevoiusImage.addEventListener('click', () => {
    currentImageNumber--;
    if(currentImageNumber < 1) currentImageNumber = totalImageCount;

    setGalleryImage();
})

nextImage.addEventListener('click', () => {
    currentImageNumber++;
    if(currentImageNumber > totalImageCount) currentImageNumber = 1;

    setGalleryImage();
})