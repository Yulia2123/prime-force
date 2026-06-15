import './js/modal-menu.js';
import './js/order-modal.js';
import './js/faq-section.js';
import './js/animal-details-modal.js';
import './js/success-stories.js';
import './js/hero.js';
import './js/pets-list.js';
import './js/about-us.js';
import './js/footer.js';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container');

import 'css-star-rating/css/star-rating.css';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = basicLightbox.create(`
  <img src="./img/photo.jpg" alt="photo">
`);

document.querySelector('.open-modal').addEventListener('click', () => {
  instance.show();
});
