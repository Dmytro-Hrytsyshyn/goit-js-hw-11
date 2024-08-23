import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function clearGallery() {
    const gallery = document.querySelector('.js-gallery');
    gallery.innerHTML = '';
}

export function renderGallery(images, gallery) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li>
            <a class="gallery__item" href="${largeImageURL}">
                <img class="gallery__image" src="${webformatURL}" alt="${tags}" />
            </a>
            <div class="image-info">
                <div class="image-info-item">Likes<span>${likes}</span></div>
                <div class="image-info-item">Views<span>${views}</span></div>
                <div class="image-info-item">Comments<span>${comments}</span></div>
                <div class="image-info-item">Downloads<span>${downloads}</span></div>
            </div>
        </li>
    `).join('');

    gallery.innerHTML = markup;
    refreshLightbox();
}


export function showLoader() {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    document.body.appendChild(loader);
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.remove();
    }
}

export function showNotification(message) {
    iziToast.show({
        message,
        position: 'topRight',
    });
}

function refreshLightbox() {
    const lightbox = new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    lightbox.refresh();
}
