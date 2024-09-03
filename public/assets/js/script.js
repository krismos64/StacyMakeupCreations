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

  // Smooth scroll for 'Back to top' button
  const backToTopButton = document.querySelector('a[href="#"]');
  backToTopButton.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // IntersectionObserver for animations on scroll
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target);
          }
      });
  });

  document.querySelectorAll('.card').forEach(card => {
      observer.observe(card);
  });
});
