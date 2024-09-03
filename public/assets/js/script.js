document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseover", function () {
      card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseout", function () {
      card.style.transform = "scale(1)";
    });
  });

  const btns = document.querySelectorAll(".btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.classList.add("clicked");
      setTimeout(() => {
        btn.classList.remove("clicked");
      }, 200);
    });
  });

  // Animation pour le bouton Aller en haut
  const backToTopButton = document.querySelector('a[href="#"]');
  backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
