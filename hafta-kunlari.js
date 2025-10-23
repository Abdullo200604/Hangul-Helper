const daysOfWeek = [
    {
        korean: "월요일",
        english: "Monday",
        romanization: "wollyoil"
    },
    {
        korean: "화요일",
        english: "Tuesday",
        romanization: "hwayoil"
    },
    {
        korean: "수요일",
        english: "Wednesday",
        romanization: "suyoil"
    },
    {
        korean: "목요일",
        english: "Thursday",
        romanization: "mogyoil"
    },
    {
        korean: "금요일",
        english: "Friday",
        romanization: "geumyoil"
    },
    {
        korean: "토요일",
        english: "Saturday",
        romanization: "toyoil"
    },
    {
        korean: "일요일",
        english: "Sunday",
        romanization: "illyoil"
    }
];

let currentWordIndex = 0;

const koreanWordEl = document.getElementById('korean-word');
const englishWordEl = document.getElementById('english-word');
const romanizationEl = document.getElementById('romanization');

function showWord(index) {
    koreanWordEl.textContent = daysOfWeek[index].korean;
    englishWordEl.textContent = daysOfWeek[index].english;
    romanizationEl.textContent = `(${daysOfWeek[index].romanization})`;
}

function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % daysOfWeek.length;
    showWord(currentWordIndex);
}

function prevWord() {
    currentWordIndex = (currentWordIndex - 1 + daysOfWeek.length) % daysOfWeek.length;
    showWord(currentWordIndex);
}

// Sahifa yuklanishi bilan birinchi so'zni ko'rsatish
showWord(currentWordIndex);
