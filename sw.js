// Kesh uchun unikal nom. Saytni yangilaganda (masalan, v2), kesh ham yangilanadi.
const CACHE_NAME = 'hangul-helper-v1';

// Oflayn rejimda ishlashi uchun keshlash kerak bo'lgan fayllar ro'yxati
const FILES_TO_CACHE = [
  '/',
  'index.html',
  'harflar.html',
  'raqamlar.html',
  'style.css',
  'script.js'
  // Agar rasmlaringiz bo'lsa, ularni ham shu yerga qo'shing: 'assets/image.png'
];

// 1. O'rnatish (install) hodisasi: Fayllarni keshga saqlash
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Fayllar keshga saqlanmoqda...');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});

// 2. Aktivatsiya (activate) hodisasi: Eski keshni tozalash
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('Eski kesh tozalanmoqda', key);
          return caches.delete(key);
        }
      }));
    })
  );
  self.clients.claim();
});

// 3. So'rov (fetch) hodisasi: So'rovlarni ushlab qolish
// Bu eng muhim qismi. Sayt oflayn bo'lganda, so'rovlarni keshdan olib beradi.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Agar so'rov keshda mavjud bo'lsa, keshdan qaytariladi.
        // Aks holda, internetdan olib, keshga saqlanadi va keyin qaytariladi.
        return response || fetch(event.request);
      })
  );
});
