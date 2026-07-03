import{i as e}from"./assets/rolldown-runtime-aKtaBQYM.js";import{a as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./assets/vendor-BTsnAJ2I.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var c=document.querySelector(`[data-menu-open]`);document.querySelector(`[data-menu-close]`);var l=document.querySelector(`[data-menu]`),ee=window.matchMedia(`(min-width: 1440px)`),u=document.querySelector(`.section-header`),d=document.querySelector(`.footer-section`),te=()=>{if(!u||!d)return;let e=u.offsetHeight,t=d.getBoundingClientRect(),n=window.innerHeight-t.top;if(n>0){let t=Math.min(n,e);u.style.transform=`translateY(-${t}px)`}else u.style.transform=`translateY(0px)`};window.addEventListener(`scroll`,()=>{requestAnimationFrame(te)},{passive:!0});var ne=e=>{e.matches&&l.classList.contains(`is-open`)&&l.classList.remove(`is-open`)},re=()=>{l.classList.add(`is-open`),document.body.classList.add(`modal-open`)},f=()=>{l.classList.remove(`is-open`),document.body.classList.remove(`modal-open`)};document.addEventListener(`keydown`,e=>{e.key===`Escape`&&f()}),ee.addEventListener(`change`,ne),c.addEventListener(`click`,re),l.addEventListener(`click`,e=>{(e.target.closest(`a`)||e.target.closest(`[data-menu-close]`))&&f()}),(()=>{let e=document.querySelectorAll(`[data-modal-open]`),t=document.querySelectorAll(`[data-modal-close]`),n=document.body,r=document.querySelector(`#order-modal form`);console.log(`form:`,r);function i(e){let t=document.getElementById(e);if(!t)return;let r=document.querySelector(`.modal-overlay.is-open`);r&&r.classList.remove(`is-open`),t.classList.add(`is-open`),n.classList.add(`modal-open`)}function a(e){e&&(e.classList.remove(`is-open`),document.querySelector(`.modal-overlay.is-open`)||n.classList.remove(`modal-open`))}e.forEach(e=>{e.addEventListener(`click`,()=>{i(e.getAttribute(`data-modal-open`))})}),t.forEach(e=>{e.addEventListener(`click`,()=>{a(e.closest(`.modal-overlay`))})}),document.addEventListener(`click`,e=>{let t=document.querySelector(`.modal-overlay.is-open`);t&&e.target.classList.contains(`modal-overlay`)&&a(t)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&a(document.querySelector(`.modal-overlay.is-open`))}),r.addEventListener(`submit`,async e=>{e.preventDefault();let t=r.elements.name,n=r.elements.phone,i=t.value.trim(),a=n.value.replace(/\D/g,``),s=!0;if(i?t.closest(`.input-container`).classList.remove(`error`):(t.closest(`.input-container`).classList.add(`error`),s=!1),/^\d{12}$/.test(a)?n.closest(`.input-container`).classList.remove(`error`):(n.closest(`.input-container`).classList.add(`error`),s=!1),s)try{await o.post(`https://paw-hut.b.goit.study/api/orders`,{name:i,phone:a,animalId:`667ad1b8e4b01a2b3c4d5e55`,comment:r.elements.comment?.value.trim()||`Коментар відсутній`}),alert(`Відправлено!`),r.reset(),document.getElementById(`order-modal`).classList.remove(`is-open`),document.body.classList.remove(`modal-open`)}catch{alert(`Помилка відправки`)}})})();var p=e(i(),1),m=e(t(),1),ie=o.create({baseURL:`https://paw-hut.b.goit.study`}),h=document.querySelector(`.pets-cards`),g=document.querySelector(`.load-more-btn`),_=1,v,y,b=[],x=``;function ae(){return b}function S(){return window.innerWidth>=1440?9:8}async function C(e,t){try{return(await ie.get(`/api/animals`,{params:{page:e,limit:t}})).data}catch{m.default.error({title:`Sorry, something went wrong`,position:`topRight`})}}function w({_id:e,image:t,species:n,name:r,categories:i,age:a,gender:o,shortDescription:s}){return`
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
    </li>`}function T(e){return e.map(w).join(``)}function E(e,t){let n=T(e);t===1?h.innerHTML=n:h.insertAdjacentHTML(`beforeend`,n)}document.addEventListener(`DOMContentLoaded`,async()=>{D(),v=S();try{let e=await C(_,v);y=Math.ceil(e.totalItems/v),b=[...b,...e.animals],E(e.animals,_),k()}catch{m.default.error({title:`Вибачте, сталася помилка`,position:`topRight`})}});function D(){g.classList.remove(`is-hidden`)}function O(){g.classList.add(`is-hidden`)}function k(){y<=1?O():_>=y&&(O(),m.default.info({title:`Вибачте, але ви дійшли до кінця списку результатів пошуку.`,position:`topRight`}))}g.addEventListener(`click`,async()=>{if(_+=1,x===``)try{let e=await C(_,v);b=[...b,...e.animals],E(e.animals,_),k()}catch{m.default.error({title:`Вибачте, сталася помилка`,position:`topRight`})}else try{let e={page:_,limit:v};x&&(e.categoryId=x);let t=(await j.get(`/api/animals`,{params:e})).data;y=Math.ceil(t.totalItems/v),b=t.animals,E(t.animals,_),k()}catch(e){console.error(e)}});var A=document.querySelector(`.pets-list`),j=o.create({baseURL:`https://paw-hut.b.goit.study`});async function M(){A&&(await N(),P())}async function N(){try{let e=(await j.get(`/api/categories`)).data,t=[`Собаки`,`Коти`,`Кролики`,`Гризуни`,`Птахи`,`Тварини з особливими потребами`,`Терміново шукають дім`],n=`
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
            `).join(``),A.innerHTML=n}catch{m.default.error({title:`Вибачте, сталася помилка відмалювання кнопок.`,position:`topRight`})}}function P(){A.addEventListener(`click`,async e=>{let t=e.target.closest(`[data-category]`);if(!t)return;let n=t.dataset.category;A.querySelectorAll(`.filter-btn`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),_=1,v=S(),D(),x=n===`all`?``:n;try{let e={page:_,limit:v};x&&(e.categoryId=x);let t=(await j.get(`/api/animals`,{params:e})).data;y=Math.ceil(t.totalItems/v),b=t.animals,E(t.animals,_),k()}catch(e){console.error(e)}})}M();var F=document.querySelector(`.pets-cards`),I=document.querySelector(`.modal-overlay-dtls`),L=I.querySelector(`.modal-image`),R=I.querySelector(`.modal-species`),z=I.querySelector(`.modal-name`),B=I.querySelector(`.modal-age`),V=I.querySelector(`.modal-gender`),H=I.querySelector(`.modal-info-part:nth-child(2) .modal-info-text`),U=I.querySelector(`.modal-info-part:nth-child(3) .modal-info-text`),W=I.querySelector(`.modal-info-part:nth-child(4) .modal-info-text`),G=I.querySelector(`.modal-close-btn`);function K(e){L.src=e.image,L.alt=e.name,R.textContent=e.species,z.textContent=e.name,B.textContent=e.age,V.textContent=e.gender,H.textContent=e.description,U.textContent=e.healthStatus,W.textContent=e.behavior,I.classList.add(`is-open`),document.body.style.overflow=`hidden`}function q(){I.classList.remove(`is-open`),document.body.style.overflow=``,document.body.classList.remove(`modal-open`)}F.addEventListener(`click`,e=>{let t=e.target.closest(`.learn-more-btn`);if(!t)return;let n=t.dataset.id,r=ae().find(e=>e._id===n);r&&K(r)}),G.addEventListener(`click`,q),I.addEventListener(`click`,e=>{e.target===I&&q()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&q()});var J=I.querySelector(`.modal-info-btn`),oe=document.querySelector(`#order-modal`);J.addEventListener(`click`,()=>{q(),oe.classList.add(`is-open`),document.body.classList.add(`modal-open`)});var Y=new r(`.feedback-swiper`,{modules:[n,a],direction:`horizontal`,loop:!1,slidesPerView:1,spaceBetween:32,allowTouchMove:!0,pagination:{el:`.feedback-swiper-pagination`,clickable:!0},navigation:{nextEl:`.arrow-button-forward`,prevEl:`.arrow-button-back`},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}});Y.on(`reachEnd`,()=>{if(Z++,Z<=X){Q(Z);return}m.default.show({position:`topRight`,message:`На жаль, відгуків більше немає.`,messageColor:`#FFFFFF`,color:`#88765C`})});var se=4,X,Z=1;document.querySelector(`.js-button-back`),document.querySelector(`.js-button-forward`);function ce(e){return`        <div class="swiper-slide">
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
        </div>`}function le(e){return e.map(e=>ce(e))}function ue(e){Y.appendSlide([...e])}var de=document.querySelector(`.js-feedback-container`),fe=o.create({baseURL:`https://paw-hut.b.goit.study`});async function Q(e){if(!de){console.warn(`Container is not find`);return}let t={limit:se,page:e};try{let e=await fe.get(`/api/feedbacks`,{params:t});if(e.status!==200){m.default.error({title:`Error`,message:`Не владося завантажити данні`,position:`topCenter`});return}let n=e.data.feedbacks;X=e.data.total,ue(le(n))}catch(e){console.error(e),m.default.error({title:`Error`,message:`Не владося завантажити відгуки. `,position:`topCenter`})}}document.addEventListener(`DOMContentLoaded`,Q(Z));var pe=document.querySelectorAll(`.about-btn-prev`),me=document.querySelectorAll(`.about-btn-next`);function $(e){pe.forEach(t=>{t.disabled=e.isBeginning}),me.forEach(t=>{t.disabled=e.isEnd})}new r(`.swiper-about`,{modules:[n,a],loop:!1,pagination:{el:`.about-us-swiper-pagination`,clickable:!0,dynamicBullets:!0,dynamicMainBullets:3},on:{init(e){$(e)},slideChange(e){$(e)}},navigation:{nextEl:`.about-btn-next`,prevEl:`.about-btn-prev`}});var he=e(s(),1);new p.default(`.accordion-container`);var ge=he.create(`
  <img src="./img/photo.jpg" alt="photo">
`);document.querySelector(`.open-modal`).addEventListener(`click`,()=>{ge.show()});
//# sourceMappingURL=index.js.map