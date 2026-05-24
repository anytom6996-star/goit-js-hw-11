import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

hideLoader();

form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchText = event.target.elements['search-text'].value.trim();

  if (!searchText) {
    iziToast.error({
      message: 'Please fill in the search field!',
      position: 'topRight',
    });

    return;
  }

  clearGallery();

  showLoader();

  try {
    const data = await fetchImages(searchText);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
      position: 'topRight',
    });

    console.log(error);
  } finally {
    hideLoader();
  }

  form.reset();
});

function showLoader() {
  loader.classList.add('is-visible');
}

function hideLoader() {
  loader.classList.remove('is-visible');
}