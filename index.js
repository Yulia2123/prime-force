import{i as e}from"./assets/rolldown-runtime-aKtaBQYM.js";import{a as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./assets/vendor-YFEGsrFJ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ee=document.querySelector(`[data-menu-open]`);document.querySelector(`[data-menu-close]`);var c=document.querySelector(`[data-menu]`),l=window.matchMedia(`(min-width: 1440px)`),te=e=>{e.matches&&c.classList.contains(`is-open`)&&c.classList.remove(`is-open`)},ne=()=>{c.classList.add(`is-open`)},u=()=>{c.classList.remove(`is-open`)};document.addEventListener(`keydown`,e=>{e.key===`Escape`&&u()}),l.addEventListener(`change`,te),ee.addEventListener(`click`,ne),c.addEventListener(`click`,e=>{(e.target.closest(`a`)||e.target.closest(`[data-menu-close]`))&&u()}),(()=>{let e=document.querySelectorAll(`[data-modal-open]`),t=document.querySelectorAll(`[data-modal-close]`),n=document.body,r=document.querySelector(`#order-modal form`);console.log(`form:`,r);function i(e){let t=document.getElementById(e);if(!t)return;let r=document.querySelector(`.modal-overlay.is-open`);r&&r.classList.remove(`is-open`),t.classList.add(`is-open`),n.classList.add(`modal-open`)}function a(e){e&&(e.classList.remove(`is-open`),document.querySelector(`.modal-overlay.is-open`)||n.classList.remove(`modal-open`))}e.forEach(e=>{e.addEventListener(`click`,()=>{i(e.getAttribute(`data-modal-open`))})}),t.forEach(e=>{e.addEventListener(`click`,()=>{a(e.closest(`.modal-overlay`))})}),document.addEventListener(`click`,e=>{let t=document.querySelector(`.modal-overlay.is-open`);t&&e.target.classList.contains(`modal-overlay`)&&a(t)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&a(document.querySelector(`.modal-overlay.is-open`))}),r.addEventListener(`submit`,async e=>{e.preventDefault();let t=r.elements.name,n=r.elements.phone,i=t.value.trim(),a=n.value.replace(/\D/g,``),s=!0;if(i?t.closest(`.input-container`).classList.remove(`error`):(t.closest(`.input-container`).classList.add(`error`),s=!1),/^\d{12}$/.test(a)?n.closest(`.input-container`).classList.remove(`error`):(n.closest(`.input-container`).classList.add(`error`),s=!1),s)try{await o.post(`https://paw-hut.b.goit.study/api/orders`,{name:i,phone:a,animalId:`667ad1b8e4b01a2b3c4d5e55`,comment:r.elements.comment?.value.trim()||`Коментар відсутній`}),alert(`Відправлено!`),r.reset(),document.getElementById(`order-modal`).classList.remove(`is-open`),document.body.classList.remove(`modal-open`)}catch{alert(`Помилка відправки`)}})})();var re=e(i(),1),d=e(t(),1),f=o.create({baseURL:`https://paw-hut.b.goit.study`}),p=document.querySelector(`.pets-cards`),m=document.querySelector(`.load-more-btn`),h=1,g,_,v=[],y=``;function ie(){return v}function b(){return window.innerWidth>=1440?9:8}async function x(e,t){try{return(await f.get(`/api/animals`,{params:{page:e,limit:t}})).data}catch{d.default.error({title:`Sorry, something went wrong`,position:`topRight`})}}function S({_id:e,image:t,species:n,name:r,categories:i,age:a,gender:o,shortDescription:s}){return`
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
    </li>`}function C(e){return e.map(S).join(``)}function w(e,t){let n=C(e);t===1?p.innerHTML=n:p.insertAdjacentHTML(`beforeend`,n)}document.addEventListener(`DOMContentLoaded`,async()=>{T(),g=b();try{let e=await x(h,g);_=Math.ceil(e.totalItems/g),v=[...v,...e.animals],w(e.animals,h),D()}catch{d.default.error({title:`Вибачте, сталася помилка`,position:`topRight`})}});function T(){m.classList.remove(`is-hidden`)}function E(){m.classList.add(`is-hidden`)}function D(){_<=1?E():h>=_&&(E(),d.default.info({title:`Вибачте, але ви дійшли до кінця списку результатів пошуку.`,position:`topRight`}))}m.addEventListener(`click`,async()=>{if(h+=1,y===``)try{let e=await x(h,g);v=[...v,...e.animals],w(e.animals,h),D()}catch{d.default.error({title:`Вибачте, сталася помилка`,position:`topRight`})}else try{let e={page:h,limit:g};y&&(e.categoryId=y);let t=(await k.get(`/api/animals`,{params:e})).data;_=Math.ceil(t.totalItems/g),v=t.animals,w(t.animals,h),D()}catch(e){console.error(e)}});var O=document.querySelector(`.pets-list`),k=o.create({baseURL:`https://paw-hut.b.goit.study`});async function A(){O&&(await j(),M())}async function j(){try{let e=(await k.get(`/api/categories`)).data,t=[`Собаки`,`Коти`,`Кролики`,`Гризуни`,`Птахи`,`Тварини з особливими потребами`,`Терміново шукають дім`],n=`
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
            `).join(``),O.innerHTML=n}catch{d.default.error({title:`Вибачте, сталася помилка відмалювання кнопок.`,position:`topRight`})}}function M(){O.addEventListener(`click`,async e=>{let t=e.target.closest(`[data-category]`);if(!t)return;let n=t.dataset.category;O.querySelectorAll(`.filter-btn`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),h=1,g=b(),T(),y=n===`all`?``:n;try{let e={page:h,limit:g};y&&(e.categoryId=y);let t=(await k.get(`/api/animals`,{params:e})).data;_=Math.ceil(t.totalItems/g),v=t.animals,w(t.animals,h),D()}catch(e){console.error(e)}})}A();var N=document.querySelector(`.pets-cards`),P=document.querySelector(`.modal-overlay-dtls`),F=P.querySelector(`.modal-image`),I=P.querySelector(`.modal-species`),L=P.querySelector(`.modal-name`),R=P.querySelector(`.modal-age`),z=P.querySelector(`.modal-gender`),B=P.querySelector(`.modal-info-part:nth-child(2) .modal-info-text`),V=P.querySelector(`.modal-info-part:nth-child(3) .modal-info-text`),H=P.querySelector(`.modal-info-part:nth-child(4) .modal-info-text`),U=P.querySelector(`.modal-close-btn`);function W(e){F.src=e.image,F.alt=e.name,I.textContent=e.species,L.textContent=e.name,R.textContent=e.age,z.textContent=e.gender,B.textContent=e.description,V.textContent=e.healthStatus,H.textContent=e.behavior,P.classList.add(`is-open`),document.body.style.overflow=`hidden`}function G(){P.classList.remove(`is-open`),document.body.style.overflow=``,document.body.classList.remove(`modal-open`)}N.addEventListener(`click`,e=>{let t=e.target.closest(`.learn-more-btn`);if(!t)return;let n=t.dataset.id,r=ie().find(e=>e._id===n);r&&W(r)}),U.addEventListener(`click`,G),P.addEventListener(`click`,e=>{e.target===P&&G()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&G()});var ae=P.querySelector(`.modal-info-btn`),K=document.querySelector(`#order-modal`);ae.addEventListener(`click`,()=>{G(),K.classList.add(`is-open`),document.body.classList.add(`modal-open`)});var q=new r(`.feedback-swiper`,{modules:[n,a],direction:`horizontal`,loop:!1,slidesPerView:1,spaceBetween:32,allowTouchMove:!0,pagination:{el:`.feedback-swiper-pagination`,clickable:!0},navigation:{nextEl:`.arrow-button-forward`,prevEl:`.arrow-button-back`},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}});q.on(`reachEnd`,()=>{if(X++,X<=Y){Q(X);return}d.default.show({position:`topRight`,message:`На жаль, відгуків більше немає.`,messageColor:`#FFFFFF`,color:`#88765C`})});var J=4,Y,X=1;document.querySelector(`.js-button-back`),document.querySelector(`.js-button-forward`);function oe(e){return`        <div class="swiper-slide">
          <ul class="feedback-list">
            <li class="feedback-item">
              <div class="rating value-${Math.ceil(e.rate)} star-svg">
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
              <p class="feedback-comment">${e.description}</p>
              <p class="feedback-author">${e.author}</p>
            </li>
          </ul>
        </div>`}function se(e){return e.map(e=>oe(e))}function Z(e){q.appendSlide([...e])}var ce=document.querySelector(`.js-feedback-container`),le=o.create({baseURL:`https://paw-hut.b.goit.study`});async function Q(e){if(!ce){console.warn(`Container is not find`);return}let t={limit:J,page:e};try{let e=await le.get(`/api/feedbacks`,{params:t});if(e.status!==200){d.default.error({title:`Error`,message:`Не владося завантажити данні`,position:`topCenter`});return}let n=e.data.feedbacks;Y=e.data.total,Z(se(n))}catch(e){console.error(e),d.default.error({title:`Error`,message:`Не владося завантажити відгуки. `,position:`topCenter`})}}document.addEventListener(`DOMContentLoaded`,Q(X));var ue=document.querySelectorAll(`.about-btn-prev`),de=document.querySelectorAll(`.about-btn-next`);function $(e){ue.forEach(t=>{t.disabled=e.isBeginning}),de.forEach(t=>{t.disabled=e.isEnd})}new r(`.swiper-about`,{modules:[n,a],loop:!1,pagination:{el:`.about-us-swiper-pagination`,clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},on:{init(e){$(e)},slideChange(e){$(e)}},navigation:{nextEl:`.about-btn-next`,prevEl:`.about-btn-prev`}});var fe=e(s(),1);new re.default(`.accordion-container`);var pe=fe.create(`
  <img src="./img/photo.jpg" alt="photo">
`);document.querySelector(`.open-modal`).addEventListener(`click`,()=>{pe.show()});
//# sourceMappingURL=index.js.map