  const arrows = document.querySelectorAll('.arrow');

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });