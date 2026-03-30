function toggleMobileMenu() {
   const btn = document.getElementById('navHamburger');
   const menu = document.getElementById('navMobileMenu');
   btn.classList.toggle('open');
   menu.classList.toggle('open');
}

function closeMobileMenu() {
   document.getElementById('navHamburger').classList.remove('open');
   document.getElementById('navMobileMenu').classList.remove('open');
}

function showPage(name) {
   document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
   document.getElementById('page-' + name).classList.add('active');
   document.querySelectorAll('.nav-links a, .nav-mobile-menu a').forEach(a => a.classList.remove('active'));
   if (name === 'home') document.querySelector('.nav-links a:first-child').classList.add('active');
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSimulacroBadges() {
   if (typeof getSimulacroSubjects !== 'function') return;
   renderSimulacroCards();
}

function renderSimulacroCards() {
   if (typeof SIMULACROS === 'undefined' || typeof QUESTIONS === 'undefined') return;
   
   const grid = document.getElementById('simulacros-grid');
   if (!grid) return;
   
   grid.innerHTML = Object.values(SIMULACROS).map(sim => {
      const subjects = getSimulacroSubjects(sim.id);
      const count = getSimulacroQuestionCount(sim.id);
      const badges = subjects.map(s => 
         '<span class="sim-badge">' + s.icon + ' ' + s.name + '</span>'
      ).join('');
      
      return '<div class="sim-card">' +
         '<div class="sim-card-header">' +
            '<div class="sim-year">' + sim.nombre + '</div>' +
            '<div class="sim-title">' + sim.titulo.replace('·', '<br>') + '</div>' +
         '</div>' +
         '<div class="sim-body">' +
            '<div class="sim-badges">' + badges + '</div>' +
            '<p class="sim-desc">' + count + ' preguntas · ' + sim.descripcion + '</p>' +
         '</div>' +
         '<div class="sim-footer">' +
            '<a class="btn btn-primary" href="simulacro/index.html?simulacro=' + sim.id + '" style="flex:1">Iniciar simulacro ➜</a>' +
         '</div>' +
      '</div>';
   }).join('');
}

if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => { });
   });
}

(function () {
   var splash = document.getElementById('splashScreen');
   if (!splash) return;

   if (sessionStorage.getItem('splashShown')) {
      splash.style.display = 'none';
      renderSimulacroBadges();
      return;
   }

   function hideSplash() {
      splash.classList.add('sp-fade-out');
      setTimeout(function () {
         splash.style.display = 'none';
         renderSimulacroBadges();
      }, 650);
      sessionStorage.setItem('splashShown', '1');
   }

   var t = setTimeout(hideSplash, 3000);

   splash.addEventListener('click', function () {
      clearTimeout(t);
      hideSplash();
   });
   splash.addEventListener('touchstart', function () {
      clearTimeout(t);
      hideSplash();
   }, { passive: true });
})();
