const CACHE = 'simulacro-v5';
const ASSETS = [
  './index.html',
  './manifest.json',
  './sw.js',
  '../shared/css/exam.css',
  '../shared/js/exam.js',
  '../shared/js/data.js',
  '../shared/js/questions.js',
  '../shared/img/portal/icon-192.png',
  '../shared/img/portal/icon-512.png',
  '../shared/img/portal/icon-escudo.svg',
  '../shared/img/portal/logo.svg',
  '../shared/img/portal/cuy_correcto_ok.png',
  '../shared/img/portal/cuy_incorrecto_ok.png',
  '../shared/img/questions/test_triangulo_eq.png',
  '../shared/img/questions/test_triangulo_recto.png',
  '../shared/img/questions/test_triangulo_acut.png',
  '../shared/img/questions/test_cuadrilatero.png',
  '../shared/img/questions/mat1.png',
  '../shared/img/questions/mat2.png',
  '../shared/img/questions/mat3.png',
  '../shared/img/questions/mat4.png',
  '../shared/img/questions/mat4-A.png',
  '../shared/img/questions/mat4-B.png',
  '../shared/img/questions/mat4-C.png',
  '../shared/img/questions/mat4-D.png',
  '../shared/img/questions/mat4-j1.png',
  '../shared/img/questions/mat4-j2.png',
  '../shared/img/questions/mat50.png',
  '../shared/img/questions/mat51.png',
  '../shared/img/questions/mat52.png',
  '../shared/img/questions/mat52-A.png',
  '../shared/img/questions/mat52-B.png',
  '../shared/img/questions/mat52-C.png',
  '../shared/img/questions/mat52-D.png',
  '../shared/img/questions/mat52-j1.png',
  '../shared/img/questions/mat52-j2.png',
  '../shared/img/questions/mat53.png',
  '../shared/img/questions/mat55.png',
  '../shared/img/questions/mat56.png',
  '../shared/img/questions/mat56-j1.png',
  '../shared/img/questions/mat56-nv1.png',
  '../shared/img/questions/mat57.png',
  '../shared/img/questions/mat57-j1.png',
  '../shared/img/questions/mat58-A.png',
  '../shared/img/questions/mat58-B.png',
  '../shared/img/questions/mat58-C.png',
  '../shared/img/questions/mat58-D.png',
  '../shared/img/questions/mat58-j1.png',
  '../shared/img/questions/mat58-j2.png',
  '../shared/img/questions/mat58-j3.png',
  '../shared/img/questions/mat59.png',
  '../shared/img/questions/cn61.png',
  '../shared/img/questions/cn64.png',
  '../shared/img/questions/cn65.png',
  '../shared/img/questions/cn69.png',
  '../shared/img/questions/cn71.png',
  '../shared/img/questions/cn77.png',
  '../shared/img/questions/cn78.png',
  '../shared/img/questions/mafalda1.png',
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html'))));
});
