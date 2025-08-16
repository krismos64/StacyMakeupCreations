/**
 * 🎨 STACY MAKEUP CREATIONS - ANIMATIONS MODERNES
 * Scripts pour les interactions et animations futuristes
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== ANIMATIONS AU SCROLL =====
    
    // Configuration de l'Intersection Observer pour les animations (optimisé)
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -20px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observation des éléments pour animation (délai réduit)
    const animatedElements = document.querySelectorAll('.card, .section, .hero-content > *');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.3s ease-out ${index * 0.05}s`;
        el.classList.add('fade-in-element');
        fadeInObserver.observe(el);
    });

    // ===== CURSOR MAGIQUE OPTIMISÉ =====
    
    const cursor = document.createElement('div');
    cursor.className = 'magic-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Effets hover sur les éléments interactifs (simplifié)
    const interactiveElements = document.querySelectorAll('a, button, .card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });

    // ===== PARALLAX EFFECT OPTIMISÉ =====
    
    let ticking = false;
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        
        // Parallax pour les éléments floating (réduit)
        const floatingElements = document.querySelectorAll('.floating');
        floatingElements.forEach(el => {
            const speed = 0.2;
            el.style.transform = `translateY(${scrollTop * speed}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // ===== ANIMATIONS TEXTE =====
    
    // Animation de frappe pour les titres
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // ===== SMOOTH SCROLL =====
    
    // Scroll fluide pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== LAZY LOADING AMÉLIORÉ =====
    
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.filter = 'blur(5px)';
                img.onload = () => {
                    img.style.filter = 'none';
                    img.style.transition = 'filter 0.3s ease';
                };
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // ===== PARTICULES AMÉLIORÉES =====
    
    function createAdvancedParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const colors = ['#667eea', '#f093fb', '#4facfe', '#00f2fe'];
        const particleCount = window.innerWidth > 768 ? 20 : 10;

        // Supprime les anciennes particules
        particlesContainer.innerHTML = '';

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Propriétés aléatoires
            const size = Math.random() * 4 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const startPos = Math.random() * 100;
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;
            
            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                left: ${startPos}%;
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
                box-shadow: 0 0 ${size * 2}px ${color};
            `;
            
            particlesContainer.appendChild(particle);
        }
    }

    // Initialisation des particules avancées
    createAdvancedParticles();

    // Recréer les particules lors du redimensionnement
    window.addEventListener('resize', createAdvancedParticles);

    // ===== EFFETS VISUELS =====
    
    // Effet de brillance sur les boutons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', x + 'px');
            this.style.setProperty('--mouse-y', y + 'px');
        });
    });

    // ===== LOADING STATES =====
    
    // Simulation de loading pour les images
    document.querySelectorAll('.creation-image').forEach(img => {
        if (!img.complete) {
            const loader = document.createElement('div');
            loader.className = 'loading';
            loader.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 10;
            `;
            
            const container = img.parentElement;
            container.style.position = 'relative';
            container.appendChild(loader);
            
            img.onload = () => {
                loader.remove();
                img.style.opacity = '1';
            };
        }
    });

    // ===== NOTIFICATIONS =====
    
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check' : 'info'}-circle me-2"></i>
            ${message}
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 10px;
            padding: 1rem 1.5rem;
            color: var(--text-light);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // ===== PERFORMANCE =====
    
    // Debounce function pour optimiser les performances
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Optimisation du scroll
    const optimizedScroll = debounce(() => {
        // Actions de scroll optimisées
        const scrollTop = window.pageYOffset;
        document.body.style.setProperty('--scroll', scrollTop + 'px');
    }, 16);

    window.addEventListener('scroll', optimizedScroll);

    // ===== EASTER EGGS =====
    
    // Konami Code pour effet spécial
    let konamiCode = [];
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konami.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join('') === konami.join('')) {
            // Effet spécial !
            document.body.style.filter = 'hue-rotate(180deg)';
            showNotification('Mode créatif activé ! 🎨✨', 'success');
            
            setTimeout(() => {
                document.body.style.filter = '';
            }, 3000);
            
            konamiCode = [];
        }
    });

    console.log('🎨 StacyMakeupCreations - Animations chargées avec succès !');
});

// ===== CSS DYNAMIQUE =====

// Ajout des styles pour les nouvelles fonctionnalités
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    /* Cursor magique optimisé */
    .magic-cursor {
        position: fixed;
        width: 8px;
        height: 8px;
        background: var(--accent-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.15s ease;
        mix-blend-mode: difference;
    }

    .cursor-hover {
        transform: scale(1.8);
        background: var(--secondary-color) !important;
    }

    /* Animation d'apparition */
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    /* Effets de brillance sur les boutons */
    .btn {
        position: relative;
        overflow: hidden;
    }

    .btn::after {
        content: '';
        position: absolute;
        top: var(--mouse-y, 50%);
        left: var(--mouse-x, 50%);
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
        transform: translate(-50%, -50%);
        transition: width 0.3s ease, height 0.3s ease;
        pointer-events: none;
    }

    .btn:hover::after {
        width: 200px;
        height: 200px;
    }

    /* Responsive pour le cursor */
    @media (max-width: 768px) {
        .magic-cursor {
            display: none;
        }
    }

    /* Amélioration des particules */
    .particle {
        filter: blur(0.5px);
        animation: particleFloat 10s linear infinite;
    }

    @keyframes particleFloat {
        0% {
            transform: translateY(100vh) rotate(0deg) scale(0);
            opacity: 0;
        }
        10% {
            opacity: 0.8;
            transform: translateY(90vh) rotate(36deg) scale(1);
        }
        90% {
            opacity: 0.8;
            transform: translateY(10vh) rotate(324deg) scale(1);
        }
        100% {
            transform: translateY(-10vh) rotate(360deg) scale(0);
            opacity: 0;
        }
    }
`;

document.head.appendChild(dynamicStyles);