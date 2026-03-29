// ════════════ PORTAL LOGIC ════════════

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile-menu');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }
  
  // Splash screen
  const splash = document.getElementById('splashScreen');
  if (splash) {
    const hideSplash = () => {
      splash.classList.add('sp-fade-out');
      setTimeout(() => {
        splash.style.display = 'none';
      }, 600);
    };
    
    splash.addEventListener('click', hideSplash);
    splash.addEventListener('touchstart', hideSplash);
    
    // Auto hide after 3 seconds
    setTimeout(hideSplash, 3000);
  }
});
