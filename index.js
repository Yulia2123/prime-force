import{i as e}from"./assets/rolldown-runtime-aKtaBQYM.js";import{a as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./assets/vendor-YFEGsrFJ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var c=document.querySelector(`[data-menu-open]`);document.querySelector(`[data-menu-close]`);var l=document.querySelector(`[data-menu]`),u=window.matchMedia(`(min-width: 1440px)`),ee=e=>{e.matches&&l.classList.contains(`is-open`)&&l.classList.remove(`is-open`)},d=()=>{l.classList.add(`is-open`)},f=()=>{l.classList.remove(`is-open`)};document.addEventListener(`keydown`,e=>{e.key===`Escape`&&f()}),u.addEventListener(`change`,ee),c.addEventListener(`click`,d),l.addEventListener(`click`,e=>{(e.target.closest(`a`)||e.target.closest(`[data-menu-close]`))&&f()}),(()=>{let e=document.querySelectorAll(`[data-modal-open]`),t=document.querySelectorAll(`[data-modal-close]`),n=document.body,r=document.querySelector(`#order-modal form`);console.log(`form:`,r);function i(e){let t=document.getElementById(e);if(!t)return;let r=document.querySelector(`.modal-overlay.is-open`);r&&r.classList.remove(`is-open`),t.classList.add(`is-open`),n.classList.add(`modal-open`)}function a(e){e&&(e.classList.remove(`is-open`),document.querySelector(`.modal-overlay.is-open`)||n.classList.remove(`modal-open`))}e.forEach(e=>{e.addEventListener(`click`,()=>{i(e.getAttribute(`data-modal-open`))})}),t.forEach(e=>{e.addEventListener(`click`,()=>{a(e.closest(`.modal-overlay`))})}),document.addEventListener(`click`,e=>{let t=document.querySelector(`.modal-overlay.is-open`);t&&e.target.classList.contains(`modal-overlay`)&&a(t)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&a(document.querySelector(`.modal-overlay.is-open`))}),r.addEventListener(`submit`,async e=>{e.preventDefault();let t=r.elements.name,n=r.elements.phone,i=!0;if([t,n].forEach(e=>{let t=e.closest(`.input-container`);e.value.trim()?(t.classList.remove(`error`),console.log(t.className)):(t.classList.add(`error`),i=!1)}),!i)return;let a=t.value.trim(),s=n.value.replace(/\D/g,``);try{await o.post(`https://paw-hut.b.goit.study/api/orders`,{name:a,phone:s,animalId:`667ad1b8e4b01a2b3c4d5e55`,comment:r.elements.comment?.value||``}),alert(`Відправлено!`),r.reset(),document.getElementById(`order-modal`).classList.remove(`is-open`),document.body.classList.remove(`modal-open`)}catch{alert(`Помилка відправки`)}})})();var te=e(i(),1),p=e(t(),1),m=o.create({baseURL:`https://paw-hut.b.goit.study`}),h=document.querySelector(`.pets-cards`),g=document.querySelector(`.load-more-btn`),_=1,v,y,b=[];function x(){return b}function S(){return window.innerWidth>=1440?9:8}async function C(e,t){try{return(await m.get(`/api/animals`,{params:{page:e,limit:t}})).data}catch{p.default.error({title:`Sorry, something went wrong`,position:`topRight`})}}function w({_id:e,image:t,species:n,name:r,categories:i,age:a,gender:o,shortDescription:s}){return`
    <li class="pet-card">
      <img
        src="${t}"
        alt="${r}"
        width="392"
        height="309"
        class="pet-image"
      />
      <div class="pet-info">
        <p class="pet-type">${n}</p>
        <h3 class="pet-name">${r}</h3>
        <ul class="pet-tags">
          ${i.map(e=>`<li class="pet-tag">${e.name}</li>`).join(``)}
        </ul>
        <div class="pet-age-gender">
          <p class="pet-age">${a}</p>
          <p class="pet-gender">${o}</p>
        </div>
        <p class="pet-description">
          ${s}
        </p>
        <button type="button" class="learn-more-btn" data-id="${e}">
          Дізнатись більше
        </button>
      </div>
    </li>`}function T(e){return e.map(w).join(``)}function E(e,t){let n=T(e);t===1?h.innerHTML=n:h.insertAdjacentHTML(`beforeend`,n)}document.addEventListener(`DOMContentLoaded`,async()=>{ne(),v=S();try{let e=await C(_,v);y=Math.ceil(e.totalItems/v),b=[...b,...e.animals],E(e.animals,_),O()}catch{p.default.error({title:`Вибачте, сталася помилка`,position:`topRight`})}});function ne(){g.classList.remove(`is-hidden`)}function D(){g.classList.add(`is-hidden`)}function O(){_>=y&&(D(),p.default.info({title:`Вибачте, але ви дійшли до кінця списку результатів пошуку.`,position:`topRight`}))}g.addEventListener(`click`,async()=>{_+=1;try{let e=await C(_,v);b=[...b,...e.animals],E(e.animals,_),O()}catch{p.default.error({title:`Вибачте, сталася помилка`,position:`topRight`})}});var k=document.querySelector(`.pets-list`),A=o.create({baseURL:`https://paw-hut.b.goit.study`}),j=[];async function M(){k&&(await N(),P())}async function N(){try{let e=(await A.get(`/api/categories`)).data,t=[`Собаки`,`Коти`,`Кролики`,`Гризуни`,`Птахи`,`Тварини з особливими потребами`,`Терміново шукають дім`],n=`
            <li>
                <button type="button" class="filter-btn active" data-category="all">
                    Всі
                </button>
            </li>
        `;e.sort((e,n)=>{let r=t.indexOf(e.name),i=t.indexOf(n.name);return(r===-1?1/0:r)-(i===-1?1/0:i)}),n+=e.map(e=>`
                <li>
                    <button type="button" class="filter-btn" data-category="${e._id}">
                        ${e.name}
                    </button>
                </li>
            `).join(``),k.innerHTML=n}catch{k.innerHTML="<li>Не вдалося корректно виконати код. Помилка:${error}</li>"}}function P(){k.addEventListener(`click`,e=>{let t=e.target.closest(`[data-category]`);if(!t)return;let n=t.dataset.category,r=k.querySelector(`[data-category="all"]`);n===`all`?(j=[],k.querySelectorAll(`.filter-btn.active`).forEach(e=>e.classList.remove(`active`)),r.classList.add(`active`)):(r&&r.classList.remove(`active`),t.classList.toggle(`active`),t.classList.contains(`active`)?j.includes(n)||j.push(n):j=j.filter(e=>e!==n),j.length===0&&r&&r.classList.add(`active`))})}M();var F=document.querySelector(`.pets-cards`),I=document.querySelector(`.modal-overlay-dtls`),L=I.querySelector(`.modal-image`),R=I.querySelector(`.modal-species`),z=I.querySelector(`.modal-name`),B=I.querySelector(`.modal-age`),V=I.querySelector(`.modal-gender`),H=I.querySelector(`.modal-info-part:nth-child(2) .modal-info-text`),U=I.querySelector(`.modal-info-part:nth-child(3) .modal-info-text`),W=I.querySelector(`.modal-info-part:nth-child(4) .modal-info-text`),G=I.querySelector(`.modal-close-btn`);function K(e){L.src=e.image,L.alt=e.name,R.textContent=e.species,z.textContent=e.name,B.textContent=e.age,V.textContent=e.gender,H.textContent=e.description,U.textContent=e.healthStatus,W.textContent=e.behavior,I.classList.add(`is-open`),document.body.style.overflow=`hidden`}function q(){I.classList.remove(`is-open`),document.body.style.overflow=``,document.body.classList.remove(`modal-open`)}F.addEventListener(`click`,e=>{let t=e.target.closest(`.learn-more-btn`);if(!t)return;let n=t.dataset.id,r=x().find(e=>e._id===n);r&&K(r)}),G.addEventListener(`click`,q),I.addEventListener(`click`,e=>{e.target===I&&q()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&q()});var J=I.querySelector(`.modal-info-btn`),Y=document.querySelector(`#order-modal`);J.addEventListener(`click`,()=>{q(),Y.classList.add(`is-open`),document.body.classList.add(`modal-open`)});var X=new r(`.feedback-swiper`,{modules:[n,a],direction:`horizontal`,loop:!1,slidesPerView:1,spaceBetween:10,allowTouchMove:!0,pagination:{el:`.feedback-swiper-pagination`,clickable:!0},navigation:{nextEl:`.arrow-button-forward`,prevEl:`.arrow-button-back`},breakpoints:{768:{slidesPerView:2,spaceBetween:20}}});X.on(`reachEnd`,()=>{console.log(`end`)}),document.querySelector(`.js-button-back`),document.querySelector(`.js-button-forward`);function Z(e){return`        <div class="swiper-slide">
          <ul class="feedback-list">
            <li class="feedback-item">
              <div class="rating value-${Math.ceil(e.rate)} star-svg">
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
              <p class="feedback-comment">${e.description}</p>
              <p class="feedback-author">${e.author}</p>
            </li>
          </ul>
        </div>`}function re(e){ie(e.map(e=>Z(e)))}function ie(e){X.appendSlide([...e])}re([{_id:`667abea5e4b0c8a2a7c1c1fa`,description:`Ми взяли морську свинку для дитини. Все пройшло чудово, тваринка доглянута. Дякуємо за вашу важливу працю!`,rate:5,author:`Віктор Савченко`},{_id:`667abea5e4b0c8a2a7c1c200`,description:`Взяли папугу Кешу, він чудовий! Описи тварин на сайті повністю відповідають дійсності, що дуже важливо для майбутніх господарів.`,rate:5,author:`Павло Захарченко`},{_id:`667abea5e4b0c8a2a7c1c213`,description:`Дякуємо! Ваша діяльність змінює світ на краще. Раді, що стали частиною цієї доброї справи.`,rate:5,author:`Євгенія Лимар`},{_id:`667abea5e4b0c8a2a7c1c217`,description:`Нам детально розповіли про характер собаки, його звички та страхи. Це дуже допомогло у перші дні.`,rate:5,author:`Інна Кузьменко`}]);var Q=new r(`.swiper-about`,{modules:[a],loop:!0,pagination:{el:`.swiper-about .swiper-pagination`,clickable:!0}});document.querySelectorAll(`.about-btn-next`).forEach(e=>{e.addEventListener(`click`,()=>Q.slideNext())}),document.querySelectorAll(`.about-btn-prev`).forEach(e=>{e.addEventListener(`click`,()=>Q.slidePrev())});var ae=e(s(),1),$=document.querySelector(`.accordion-container`);$&&new te.default($);var oe=ae.create(`
  <img src="./img/photo.jpg" alt="photo">
`);document.addEventListener(`DOMContentLoaded`,()=>{let e=document.querySelector(`.open-modal`);e&&e.addEventListener(`click`,()=>{oe.show()})});
//# sourceMappingURL=index.js.map