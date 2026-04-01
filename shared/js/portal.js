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
   
   const defaultConfig = getSubjectDefaultConfig('lc');
   
   grid.innerHTML = Object.values(SIMULACROS).map(sim => {
      const subjects = getSimulacroSubjects(sim.id);
      const count = getSimulacroQuestionCount(sim.id);
      
      if (sim.dinamico) {
         const config = loadPortalConfig(sim.id);
         let totalQuestions = 0;
         
         const configHtml = subjects.map(subj => {
            const maxQuestions = getSubjectMaxQuestions(subj.key, sim.id);
            const val = config[subj.key]?.preguntas ?? Math.min(defaultConfig.preguntas, maxQuestions);
            totalQuestions += val;
            return '<div class="sim-subject-config">' +
               '<span class="sim-subject-config-icon">' + subj.icon + '</span>' +
               '<span class="sim-subject-config-name">' + subj.name + '</span>' +
               '<div class="sim-spinner">' +
                  '<button type="button" class="sim-spinner-btn" onclick="adjustPortalConfig(' + sim.id + ', \'' + subj.key + '\', -1)">−</button>' +
                  '<input type="number" id="p-' + sim.id + '-' + subj.key + '" ' +
                     'class="sim-spinner-input" ' +
                     'value="' + val + '" ' +
                     'min="0" max="' + maxQuestions + '" ' +
                     'onchange="updatePortalConfig(' + sim.id + ', \'' + subj.key + '\', this.value)">' +
                  '<button type="button" class="sim-spinner-btn" onclick="adjustPortalConfig(' + sim.id + ', \'' + subj.key + '\', 1)">+</button>' +
               '</div>' +
            '</div>';
         }).join('');
         
         return '<div class="sim-card sim-card-dynamic">' +
            '<div class="sim-card-header">' +
               '<div class="sim-year">' + sim.nombre + '</div>' +
               '<div class="sim-title">' + sim.titulo.replace('·', '<br>') + '</div>' +
            '</div>' +
            '<div class="sim-body">' +
               '<p class="sim-desc">' + sim.descripcion + '</p>' +
            '</div>' +
            '<div class="sim-config-inline">' +
               '<div class="sim-config-title">Configurar número de preguntas</div>' +
               '<div class="sim-subjects-config">' + configHtml + '</div>' +
               '<div class="sim-config-options">' +
                  '<label class="sim-config-toggle">' +
                     '<input type="checkbox" id="a-' + sim.id + '" ' + (config[subjects[0]?.key]?.aleatorio !== false ? 'checked' : '') + ' onchange="togglePortalAleatorio(' + sim.id + ', this.checked)">' +
                     '<span class="sim-config-toggle-label">🔀 Preguntas aleatorias</span>' +
                  '</label>' +
                  '<div class="sim-total-questions"><span id="t-' + sim.id + '">' + totalQuestions + '</span> preguntas</div>' +
               '</div>' +
            '</div>' +
            '<div class="sim-footer">' +
               '<button class="btn btn-primary" style="flex:1" onclick="startPortalSimulacro(' + sim.id + ')">Iniciar Simulacro ➜</button>' +
            '</div>' +
         '</div>';
      }
      
      const badges = subjects.map(s => 
         '<span class="sim-badge">' + s.icon + ' ' + s.name + '</span>'
      ).join('');
      
      const questionCount = getSimulacroQuestionCount(sim.id);
      
      return '<div class="sim-card">' +
         '<div class="sim-card-header">' +
            '<div class="sim-year">' + sim.nombre + '</div>' +
            '<div class="sim-title">' + sim.titulo.replace('·', '<br>') + '</div>' +
         '</div>' +
         '<div class="sim-body">' +
            '<div class="sim-badges">' + badges + '</div>' +
            '<p class="sim-desc">' + questionCount + ' preguntas · ' + sim.descripcion + '</p>' +
         '</div>' +
         '<div class="sim-footer">' +
            '<a class="btn btn-primary" href="simulacro/index.html?simulacro=' + sim.id + '" style="flex:1">Iniciar Simulacro ➜</a>' +
         '</div>' +
      '</div>';
   }).join('');
}

/* ════════════ INLINE CONFIG HANDLERS ════════════ */
let PORTAL_CONFIG = {};

function getPortalConfigKey(simId) {
   return 'portalConfig_' + simId;
}

function loadPortalConfig(simId) {
   const key = getPortalConfigKey(simId);
   const stored = localStorage.getItem(key);
   if (stored) {
      try {
         return JSON.parse(stored);
      } catch (e) {}
   }
   
   const subjects = getSimulacroSubjects(simId);
   const config = {};
   const defaultConfig = getSubjectDefaultConfig('lc');
   
   subjects.forEach(subj => {
      const maxQuestions = getSubjectMaxQuestions(subj.key, simId);
      config[subj.key] = {
         preguntas: Math.min(defaultConfig.preguntas, maxQuestions),
         inicio: 1,
         aleatorio: true
      };
   });
   
   return config;
}

function savePortalConfig(simId, config) {
   localStorage.setItem(getPortalConfigKey(simId), JSON.stringify(config));
}

function updatePortalConfig(simId, subject, value) {
   const maxQuestions = getSubjectMaxQuestions(subject, simId);
   value = Math.max(0, Math.min(parseInt(value) || 0, maxQuestions));
   
   if (!PORTAL_CONFIG[simId]) {
      PORTAL_CONFIG[simId] = loadPortalConfig(simId);
   }
   
   PORTAL_CONFIG[simId][subject].preguntas = value;
   savePortalConfig(simId, PORTAL_CONFIG[simId]);
   
   const inputEl = document.getElementById('p-' + simId + '-' + subject);
   if (inputEl) inputEl.value = value;
   
   updatePortalTotal(simId);
}

function adjustPortalConfig(simId, subject, delta) {
   const inputEl = document.getElementById('p-' + simId + '-' + subject);
   if (!inputEl) return;
   
   const maxQuestions = getSubjectMaxQuestions(subject, simId);
   let newValue = parseInt(inputEl.value) + delta;
   newValue = Math.max(0, Math.min(newValue, maxQuestions));
   
   inputEl.value = newValue;
   updatePortalConfig(simId, subject, newValue);
}

function togglePortalAleatorio(simId, value) {
   if (!PORTAL_CONFIG[simId]) {
      PORTAL_CONFIG[simId] = loadPortalConfig(simId);
   }
   
   const subjects = getSimulacroSubjects(simId);
   subjects.forEach(subj => {
      PORTAL_CONFIG[simId][subj.key].aleatorio = value;
   });
   
   savePortalConfig(simId, PORTAL_CONFIG[simId]);
}

function updatePortalTotal(simId) {
   const subjects = getSimulacroSubjects(simId);
   
   if (!PORTAL_CONFIG[simId]) {
      PORTAL_CONFIG[simId] = loadPortalConfig(simId);
   }
   
   const total = subjects.reduce((sum, subj) => {
      return sum + (PORTAL_CONFIG[simId][subj.key]?.preguntas || 0);
   }, 0);
   
   const totalEl = document.getElementById('t-' + simId);
   if (totalEl) {
      totalEl.textContent = total;
   }
   
   const card = document.querySelector('#simulacros-grid .sim-card');
   const btn = card?.querySelector('.sim-footer .btn');
   if (btn) {
      btn.disabled = total === 0;
      btn.style.opacity = total === 0 ? '0.5' : '1';
   }
}

function startPortalSimulacro(simId) {
   if (!PORTAL_CONFIG[simId]) {
      PORTAL_CONFIG[simId] = loadPortalConfig(simId);
   }
   
   const subjects = getSimulacroSubjects(simId);
   const activeSubjects = {};
   let hasActive = false;
   
   subjects.forEach(subj => {
      const preguntas = PORTAL_CONFIG[simId][subj.key]?.preguntas || 0;
      if (preguntas > 0) {
         activeSubjects[subj.key] = {
            preguntas: preguntas,
            inicio: 1,
            aleatorio: PORTAL_CONFIG[simId][subj.key]?.aleatorio ?? true
         };
         hasActive = true;
      }
   });
   
   if (!hasActive) {
      alert('Selecciona al menos una materia con preguntas');
      return;
   }
   
   const configData = {
      simulacroId: simId,
      subjects: activeSubjects
   };
   
   sessionStorage.setItem('simulacroConfig', JSON.stringify(configData));
   window.location.href = 'simulacro/index.html?simulacro=' + simId;
}

/* ════════════ CONFIG MODAL ════════════ */
let MODAL_SIMULACRO_ID = 1;
let MODAL_SUBJECT_CONFIG = {};

function openConfigModal(simId) {
   MODAL_SIMULACRO_ID = simId;
   initModalConfig();
   document.getElementById('configModal').classList.add('open');
   document.body.style.overflow = 'hidden';
}

function closeConfigModal() {
   document.getElementById('configModal').classList.remove('open');
   document.body.style.overflow = '';
}

function initModalConfig() {
   const subjects = getSimulacroSubjects(MODAL_SIMULACRO_ID);
   
   subjects.forEach(subj => {
      const defaultConfig = getSubjectDefaultConfig(subj.key);
      const maxQuestions = getSubjectMaxQuestions(subj.key, MODAL_SIMULACRO_ID);
      MODAL_SUBJECT_CONFIG[subj.key] = {
         preguntas: Math.min(defaultConfig.preguntas, maxQuestions),
         inicio: Math.min(defaultConfig.inicio, maxQuestions),
         aleatorio: defaultConfig.aleatorio
      };
   });
   
   renderModalConfigGrid();
}

function renderModalConfigGrid() {
   const grid = document.getElementById('configModalGrid');
   const subjects = getSimulacroSubjects(MODAL_SIMULACRO_ID);
   
   grid.innerHTML = subjects.map(subj => {
      const config = MODAL_SUBJECT_CONFIG[subj.key];
      const maxQuestions = getSubjectMaxQuestions(subj.key, MODAL_SIMULACRO_ID);
      
      return '<div class="config-modal-subject">' +
         '<div class="config-modal-subject-header">' +
            '<span class="config-modal-subject-icon">' + subj.icon + '</span>' +
            '<div>' +
               '<div class="config-modal-subject-name">' + subj.name + '</div>' +
               '<div class="config-modal-subject-info">' + maxQuestions + ' preguntas disponibles</div>' +
            '</div>' +
         '</div>' +
         '<div class="config-modal-fields">' +
            '<div class="config-modal-field">' +
               '<label>Preguntas</label>' +
               '<input type="number" id="mm-preg-' + subj.key + '" value="' + config.preguntas + '" min="1" max="' + maxQuestions + '" onchange="updateModalConfig(\'' + subj.key + '\', \'preguntas\', this.value)">' +
            '</div>' +
            '<div class="config-modal-field">' +
               '<label>Iniciar desde</label>' +
               '<input type="number" id="mm-ini-' + subj.key + '" value="' + config.inicio + '" min="1" max="' + maxQuestions + '" onchange="updateModalConfig(\'' + subj.key + '\', \'inicio\', this.value)">' +
            '</div>' +
            '<div class="config-modal-field">' +
               '<label>Aleatorio</label>' +
               '<input type="checkbox" id="mm-ale-' + subj.key + '" ' + (config.aleatorio ? 'checked' : '') + ' onchange="updateModalConfig(\'' + subj.key + '\', \'aleatorio\', this.checked)">' +
            '</div>' +
         '</div>' +
      '</div>';
   }).join('');
   
   const globalAleatorio = document.getElementById('configModalAleatorio');
   if (globalAleatorio) {
      const allAleatorio = subjects.every(s => MODAL_SUBJECT_CONFIG[s.key].aleatorio);
      globalAleatorio.checked = allAleatorio;
   }
}

function updateModalConfig(subject, field, value) {
   const maxQuestions = getSubjectMaxQuestions(subject, MODAL_SIMULACRO_ID);
   
   if (field === 'preguntas' || field === 'inicio') {
      value = parseInt(value, 10) || 1;
   }
   
   MODAL_SUBJECT_CONFIG[subject][field] = value;
   
   const pregInput = document.getElementById('mm-preg-' + subject);
   const iniInput = document.getElementById('mm-ini-' + subject);
   
   if (pregInput && field === 'inicio') {
      const maxStart = maxQuestions - MODAL_SUBJECT_CONFIG[subject].preguntas + 1;
      if (value > maxStart) {
         pregInput.max = maxQuestions - value + 1;
         if (MODAL_SUBJECT_CONFIG[subject].preguntas > pregInput.max) {
            MODAL_SUBJECT_CONFIG[subject].preguntas = pregInput.max;
            pregInput.value = pregInput.max;
         }
      } else {
         pregInput.max = maxQuestions;
      }
   }
   
   renderModalConfigGrid();
}

function toggleConfigModalAleatorio() {
   const globalAleatorio = document.getElementById('configModalAleatorio');
   const value = globalAleatorio.checked;
   const subjects = getSimulacroSubjects(MODAL_SIMULACRO_ID);
   
   subjects.forEach(subj => {
      MODAL_SUBJECT_CONFIG[subj.key].aleatorio = value;
   });
   
   renderModalConfigGrid();
}

function resetConfigModal() {
   initModalConfig();
}

function validateModalConfig() {
   const subjects = getSimulacroSubjects(MODAL_SIMULACRO_ID);
   
   for (const subj of subjects) {
      const errors = validateSubjectConfig(subj.key, MODAL_SUBJECT_CONFIG[subj.key], MODAL_SIMULACRO_ID);
      if (errors.length > 0) {
         alert('Error en ' + subj.name + ': ' + errors[0]);
         return false;
      }
   }
   return true;
}

function startSimulacroWithConfig() {
   if (!validateModalConfig()) return;
   
   const configData = {
      simulacroId: MODAL_SIMULACRO_ID,
      subjects: MODAL_SUBJECT_CONFIG
   };
   
   sessionStorage.setItem('simulacroConfig', JSON.stringify(configData));
   closeConfigModal();
   window.location.href = 'simulacro/index.html?simulacro=' + MODAL_SIMULACRO_ID;
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
