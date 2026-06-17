import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const BASE_URL = 'https://paw-hut.b.goit.study';

async function loadFeedbacks() {
  const container = document.querySelector('.js-feedback-container');
  if (!container) {
    console.warn("Container is not find");
    return;
  }
  try {
    const response = await axios.get(BASE_URL, {
    params: {
page: CURRENT_PAGE,
limit: 10,
    }
  });
    if (response.status !== 200) {
      iziToast.error({
        title: 'Error',
        message: 'Не владося завантажити данні',
        position: 'topCenter'
    });
  return;
  }
    const feedbacksList = response.data.feedbacks;

    container.innerHTML = '';

    if (!feedbacksList || feedbacksList.length < 3) {
      container.innerHTML = '<p class="error">Отримано менше 3-х відгуків.</p>';
      return;
    }
    //  feedbacksList.forEach(item => {
    //   const card = document.createElement('div');
    //   card.className = 'feedback-card';

    //   const numericRate = Math.round(parseFloat(item.rate)) || 5;

    //   card.innerHTML = `
    //     <div class="feedback-header">
    //       <span class="feedback-author">${item.author}</span>
    //       <span class="feedback-rating" title="Оцінка: ${item.rate}">
    //         ${'★'.repeat(numericRate)}${'☆'.repeat(5 - numericRate)}
    //       </span>
    //     </div>
    //     <p class="feedback-text">${item.description}</p>
    //   `;

    //   container.appendChild(card);
    // });
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'Не владося завантажити данні',
      position: 'topCenter'
    });
  }
}

document.addEventListener('DOMContentLoaded', loadFeedbacks);
loadFeedbacks();
//


const swiperFeedback = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,

  allowTouchMove: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },

  navigation: {
    nextEl: '.arrow-button-forward',
    prevEl: '.arrow-button-back',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

swiperFeedback.on('reachEnd', () => {
  console.log('end');
});
let PER_PAGE = 3;
let TOTAL;
let TOTAL_PAGES;
let CURRENT_PAGE;
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
                        xlink:href="../img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="../img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="../img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="../img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="../img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="../img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="../img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="../img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="../img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="../img/sprite.svg#icon-star-filled"
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
  const markup = array.map(el => slideTemplate(el));
  renderSlides(markup)
}
function renderSlides(slides) {
  swiperFeedback.appendSlide([...slides]);
}

createSlides([
  {
    _id: '667abea5e4b0c8a2a7c1c1fa',
    description:
      'Ми взяли морську свинку для дитини. Все пройшло чудово, тваринка доглянута. Дякуємо за вашу важливу працю!',
    rate: 5,
    author: 'Віктор Савченко',
  },
  {
    _id: '667abea5e4b0c8a2a7c1c200',
    description:
      'Взяли папугу Кешу, він чудовий! Описи тварин на сайті повністю відповідають дійсності, що дуже важливо для майбутніх господарів.',
    rate: 5,
    author: 'Павло Захарченко',
  },
  {
    _id: '667abea5e4b0c8a2a7c1c213',
    description:
      'Дякуємо! Ваша діяльність змінює світ на краще. Раді, що стали частиною цієї доброї справи.',
    rate: 5,
    author: 'Євгенія Лимар',
  },
  {
    _id: '667abea5e4b0c8a2a7c1c217',
    description:
      'Нам детально розповіли про характер собаки, його звички та страхи. Це дуже допомогло у перші дні.',
    rate: 5,
    author: 'Інна Кузьменко',
  },
]);
