document.addEventListener("DOMContentLoaded", function() {
    const visitsElement = document.getElementById('visits');
    
    // Saytingiz uchun unikal nom (o'zgartirmang, toki hisob adashmasin)
    const namespace = 'abdullo200604-hangul-helper';
    const key = 'visits';

    function updateCounter() {
        // Foydalanuvchi brauzerini tekshiramiz: bu foydalanuvchi avval hisoblanganmi?
        if (localStorage.getItem('hasVisitedHangulHelper')) {
            // Agar hisoblangan bo'lsa, hisoblagichni oshirmaymiz, shunchaki hozirgi sonni olamiz
            fetch(`https://api.countapi.xyz/get/${namespace}/${key}`)
                .then(res => res.json())
                .then(data => {
                    visitsElement.textContent = data.value;
                })
                .catch(error => {
                    console.error("Hisoblagichni olishda xatolik:", error);
                    visitsElement.textContent = 'Xatolik';
                });
        } else {
            // Agar bu yangi foydalanuvchi bo'lsa, hisoblagichni 1 ga oshiramiz
            fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
                .then(res => res.json())
                .then(data => {
                    visitsElement.textContent = data.value;
                    // Brauzerda "bu foydalanuvchi hisoblandi" deb belgilab qo'yamiz
                    localStorage.setItem('hasVisitedHangulHelper', 'true');
                })
                .catch(error => {
                    console.error("Hisoblagichni yangilashda xatolik:", error);
                    visitsElement.textContent = 'Xatolik';
                });
        }
    }

    updateCounter();
});
