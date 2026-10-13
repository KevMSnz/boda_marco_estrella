(function(){
  const modal = document.getElementById('giftQrModal');
  const openButton = document.getElementById('openGiftQr');
  const closeButton = document.getElementById('closeGiftQr');
  if (!modal || !openButton || !closeButton) return;
  let previousFocus = null;
  function openModal(){
    previousFocus = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('gift-qr-open');
    closeButton.focus();
  }
  function closeModal(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('gift-qr-open');
    if (previousFocus) previousFocus.focus();
  }
  openButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
  modal.querySelectorAll('[data-close-gift-qr]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();