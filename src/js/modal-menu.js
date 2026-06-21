

const openMobileMenuBtn = document.querySelector('[data-menu-open]');
const closeMobileMenuBtn = document.querySelector('[data-menu-close]');
const mobileMenu = document.querySelector('[data-menu]');
const desktopMediaMatch = window.matchMedia('(min-width: 1440px)');
const header = document.querySelector('.section-header');
const footer = document.querySelector('.footer-section');
// 
const syncHeaderWithFooter = () => {
    if (!header || !footer) return;

    const headerHeigth = header.offsetHeight;
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const pixelsInViewport = windowHeight - footerRect.top;
    if (pixelsInViewport > 0) {
        const shift = Math.min(pixelsInViewport, headerHeigth);
        header.style.transform = `translateY(-${shift}px)`;
    } else {
        header.style.transform = `translateY(0px)`
    }
}

window.addEventListener('scroll', () => {
    requestAnimationFrame(syncHeaderWithFooter);
}, { passive: true });


const handleDesktopChange = (e) => {
    if (e.matches && mobileMenu.classList.contains('is-open')) mobileMenu.classList.remove('is-open');
}

const openMobileMenu = () => {
    mobileMenu.classList.add('is-open');
    document.body.classList.add('modal-open');

}

const closeMobileMenu = () => {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('modal-open');

}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileMenu();
    
});

// для того щоб якщо меню відрите і ми єкран робимо 1440 меню закривається
desktopMediaMatch.addEventListener('change', handleDesktopChange);

openMobileMenuBtn.addEventListener('click', openMobileMenu);

mobileMenu.addEventListener('click', (event) => {
   
    if (event.target.closest('a') || event.target.closest('[data-menu-close]')) closeMobileMenu();
});





