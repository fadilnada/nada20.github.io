function goTo(page) {
  const container = document.querySelector('.fade-container');
  container.style.animation = 'fadeOut 0.8s forwards';
  
  setTimeout(() => {
    window.location.href = page;
  }, 700); // waktu sedikit sebelum halaman berganti
}
