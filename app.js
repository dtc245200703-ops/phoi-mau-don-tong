const modal = document.getElementById('product-modal');
const productName = document.getElementById('modal-name');
const productPrice = document.getElementById('modal-price');
document.querySelectorAll('[data-preview]').forEach(button => {
  button.addEventListener('click', () => {
    productName.textContent = button.dataset.preview;
    productPrice.textContent = button.dataset.price || '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});
function closeModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
document.getElementById('close-modal').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });
