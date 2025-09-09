// Kelajakdagi interaktivlik uchun joy
console.log("Koreys tili sayti ishga tushdi!");

// Service Worker'ni ro'yxatdan o'tkazish
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker muvaffaqiyatli ro\'yxatdan o\'tdi!');
      })
      .catch(error => {
        console.log('Service Worker ro\'yxatdan o\'tishda xatolik:', error);
      });
  });
}
