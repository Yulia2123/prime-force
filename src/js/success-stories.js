import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios, { isCancel, AxiosError } from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const swiperFeedback = new Swiper('.feedback-swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 32,

  allowTouchMove: true,

  pagination: {
    el: '.feedback-swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },

  navigation: {
    nextEl: '.arrow-button-forward',
    prevEl: '.arrow-button-back',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

swiperFeedback.on('reachEnd', () => {
  CURRENT_PAGE++;
  if (CURRENT_PAGE <= TOTAL_PAGES) {
    loadFeedbacks(CURRENT_PAGE);
    return;
  }
  iziToast.show({
    position: 'topRight',
    message: 'На жаль, відгуків більше немає.',
    messageColor: '#FFFFFF',
    color: '#88765C',
  });
  return;
});
let PER_PAGE = 4;
let TOTAL_PAGES;
let CURRENT_PAGE = 1;
const refs = {
  buttonNext: document.querySelector('.js-button-back'),
  buttonPrev: document.querySelector('.js-button-forward'),
};

function slideTemplate(elem) {
  return `        <div class="swiper-slide">
          <ul class="feedback-list">
            <li class="feedback-item">
              <div class="rating value-${Math.ceil(elem.rate)} star-svg">
                <div class="star-container" id="stars-wrapper">
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                </div>
              </div>
              <p class="feedback-comment">${elem.description}</p>
              <p class="feedback-author">${elem.author}</p>
            </li>
          </ul>
        </div>`;
}

function createSlides(array) {
  return array.map(el => slideTemplate(el));
}
function renderSlides(slides) {
  swiperFeedback.appendSlide([...slides]);
}

const container = document.querySelector('.js-feedback-container');

const axiosInstance = axios.create({
  baseURL: 'https://paw-hut.b.goit.study',
});

async function loadFeedbacks(page) {
  if (!container) {
    console.warn('Container is not find');
    return;
  }
  const params = {
    limit: PER_PAGE,
    page: page,
  };
  try {
    const response = await axiosInstance.get('/api/feedbacks', { params });

    if (response.status !== 200) {
      iziToast.error({
        title: 'Error',
        message: 'Не владося завантажити данні',
        position: 'topCenter',
      });
      return;
    }
    const feedbacksList = response.data.feedbacks;
    TOTAL_PAGES = response.data.total;
    const markup = createSlides(feedbacksList);
    renderSlides(markup);
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'Не владося завантажити відгуки. ',
      position: 'topCenter',
    });
  }
}

document.addEventListener('DOMContentLoaded', loadFeedbacks(CURRENT_PAGE));
