// Бургер-меню для мобильной навигации
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burger');
  const sidebar = document.getElementById('sidebar');
  burger.addEventListener('click', function(e) {
    e.stopPropagation();
    burger.classList.toggle('active');
    sidebar.classList.toggle('open');
  });
  // Клик вне меню — закрыть
  document.addEventListener('click', function(e) {
    if (!burger.contains(e.target) && !sidebar.contains(e.target)) {
      burger.classList.remove('active');
      sidebar.classList.remove('open');
    }
  });
});