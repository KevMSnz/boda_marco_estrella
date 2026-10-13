(function(){
  const modal = document.getElementById('giftQrModal');
  const openButton = document.getElementById('openGiftQr');
  const closeButton = document.getElementById('closeGiftQr');
  if (!modal || !openButton || !closeButton) return;

  let previousFocus = null;
  // Defensive default: the QR must never appear in the page before a click.
  modal.hidden = true;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');

  function openModal(){
    previousFocus = document.activeElement;
    modal.hidden = false;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('gift-qr-open');
    closeButton.focus();
  }

  function closeModal(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('gift-qr-open');
    modal.hidden = true;
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  }

  openButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
  modal.querySelectorAll('[data-close-gift-qr]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });
})();
