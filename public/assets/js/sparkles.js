document.addEventListener('DOMContentLoaded', function () {
    const sparkleContainer = document.getElementById('sparkles');
  
    function createSparkle() {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.width = `${Math.random() * 5 + 5}px`; // Taille aléatoire
      sparkle.style.height = sparkle.style.width;
      sparkle.style.top = `${Math.random() * 100}vh`; // Position verticale aléatoire
      sparkle.style.left = `${Math.random() * 100}vw`; // Position horizontale aléatoire
      sparkle.style.opacity = Math.random(); // Opacité aléatoire
  
      sparkleContainer.appendChild(sparkle);
  
      // Animer les paillettes
      const duration = Math.random() * 3 + 2; // Durée aléatoire de l'animation
      sparkle.style.transition = `transform ${duration}s linear, opacity ${duration}s linear`;
      sparkle.style.transform = `translateY(${100 + Math.random() * 50}vh)`;
      
      // Supprimer l'élément une fois l'animation terminée
      setTimeout(() => {
        sparkle.remove();
      }, duration * 1000);
    }
  
    // Créer des paillettes à intervalles réguliers
    setInterval(createSparkle, 100);
  });

