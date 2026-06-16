import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const axiosInstance = axios.create({
    baseURL: 'https://paw-hut.b.goit.study'
});

const ulElem = document.querySelector('.pets-cards');
const loadMoreBtn = document.querySelector('.load-more-btn');

let page = 1;
let currentLimit; 
let totalPages;


function windowLimit() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1440) {
        return 9;
    } else {
        return 8;
    }
}

async function fetchAnimals(page, limit) {
    try {
        const res = await axiosInstance.get('/api/animals', {
            params: {
                page: page,
                limit: limit
            }
        });
        return res.data; 
    } catch {
        iziToast.error({
            title: 'Sorry, something went wrong',
            position: 'topRight'
        });
    }
}


function petTemplate({ _id, image, species, name, categories, age, gender, shortDescription }) {
    return `
    <li class="pet-card">
      <img
        src="${image}"
        alt="${name}"
        width="392"
        height="309"
        class="pet-image"
      />
      <div class="pet-info">
        <p class="pet-type">${species}</p>
        <h3 class="pet-name">${name}</h3>
        <ul class="pet-tags">
          ${categories.map(pet => `<li class="pet-tag">${pet.name}</li>`).join('')}
        </ul>
        <div class="pet-age-gender">
          <p class="pet-age">${age}</p>
          <p class="pet-gender">${gender}</p>
        </div>
        <p class="pet-description">
          ${shortDescription}
        </p>
        <button type="button" class="learn-more-btn" data-id="${_id}">
          Дізнатись більше
        </button>
      </div>
    </li>`
}

function petsTemplate(arr) {
  return arr.map(petTemplate).join('');
}


function petsGallery(images, currentPage) {
    const markup = petsTemplate(images);
    if (currentPage === 1) {
        ulElem.innerHTML = markup;
    } else {
        ulElem.insertAdjacentHTML('beforeend', markup);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    showLoadMoreButton()
    currentLimit = windowLimit();
    try {
        const data = await fetchAnimals(page, currentLimit);
        totalPages = Math.ceil(data.totalItems / currentLimit);
        petsGallery(data.animals, page);
        checkTotalPages();
    } catch {
        iziToast.error({
            title: 'Sorry, something went wrong',
            position: 'topRight'
        });
    }
});

function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden')
};

function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden')
};

function checkTotalPages() {
    if (page >= totalPages) {
        hideLoadMoreButton();
        iziToast.info({
            title: `We're sorry, but you've reached the end of search results.`,
            position: 'topRight'
        });
    }
}

loadMoreBtn.addEventListener('click', async () => {
    page = page + 1;
    try {
        const data = await fetchAnimals(page, currentLimit);
        petsGallery(data.animals, page);
        checkTotalPages();
    } catch {
        iziToast.error({
            title: 'Sorry, something went wrong',
            position: 'topRight'
        });
    }
});