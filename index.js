const cookieModal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');

setTimeout(() => {
    cookieModal.style.display = 'inline';
}, 1500)

modalCloseBtn.addEventListener('click', () => {
    cookieModal.style.display = 'none';
})