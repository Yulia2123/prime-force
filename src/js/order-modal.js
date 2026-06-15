(() => {
  const openBtns = document.querySelectorAll('[data-modal-open]');
  const closeBtns = document.querySelectorAll('[data-modal-close]');
  const body = document.body;

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add('is-open');
    body.classList.add('modal-open');
  }

  function closeModal(modal) {
    if (!modal) return;

    modal.classList.remove('is-open');
    body.classList.remove('modal-open');
  }
  // відкриття
  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-modal-open');
      openModal(id);
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      closeModal(modal);
    });
  });

  document.addEventListener('click', e => {
    const openModalEl = document.querySelector('.modal-overlay.is-open');

    if (!openModalEl) return;

    if (e.target.classList.contains('modal-overlay')) {
      closeModal(openModalEl);
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const openModalEl = document.querySelector('.modal-overlay.is-open');
      closeModal(openModalEl);
    }
  });
})();
