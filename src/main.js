
import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery, showLoader, hideLoader, showNotification } from './js/render-functions';

const searchForm = document.querySelector('.form'); 
const searchInput = document.querySelector('.input'); 
const gallery = document.querySelector('.js-gallery'); 

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (!query) {
        showNotification('Please enter a search query');
        return;
    }

    clearGallery(); 
    showLoader(); 

    fetchImages(query)
        .then(data => {
            hideLoader(); 

            if (data.hits.length === 0) {
                showNotification('Sorry, there are no images matching your search query. Please try again!');
                return;
            }

            renderGallery(data.hits, gallery); 
        })
        .catch(error => {
            hideLoader();
            showNotification('Failed to load images. Please try again later.');
        });
});
