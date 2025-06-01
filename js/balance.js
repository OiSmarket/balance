// Скрыть элемент загрузки после полной загрузки страницы
  window.addEventListener("load", function() {
    document.getElementById("loader").style.display = "none";
  });
document.addEventListener('DOMContentLoaded', function() {
  const withdrawBtn = document.getElementById('withdraw-btn');
  const modal = document.getElementById('withdraw-modal');
  const modalClose = document.getElementById('modal-close');

  // Открытие модального окна
  withdrawBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('show');
  });

  // Закрытие модального окна
  modalClose.addEventListener('click', function() {
    modal.classList.remove('show');
  });

  // Закрытие по клику вне модального окна
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

  // Закрытие по ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      modal.classList.remove('show');
    }
  });
});