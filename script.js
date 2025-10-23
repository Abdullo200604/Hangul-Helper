const words = [
    {
        korean: "안녕하세요",
        english: "Hello",
        romanization: "annyeonghaseyo"
    },
    {
        korean: "감사합니다",
        english: "Thank you",
        romanization: "gamsahamnida"
    },
    {
        korean: "사랑해요",
        english: "I love you",
        romanization: "saranghaeyo"
    },
    {
        korean: "네",
        english: "Yes",
        romanization: "ne"
    },
  	{
        korean: "아니요",
        english: "No",
        romanization: "aniyo"
    }
];

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
let currentArray = words;

const koreanWordEl = document.getElementById('korean-word');
const englishWordEl = document.getElementById('english-word');
const romanizationEl = document.getElementById('romanization');

function showWord(index) {
    koreanWordEl.textContent = currentArray[index].korean;
    englishWordEl.textContent = currentArray[index].english;
    romanizationEl.textContent = `(${currentArray[index].romanization})`;
}

function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % currentArray.length;
    showWord(currentWordIndex);
}

function prevWord() {
    currentWordIndex = (currentWordIndex - 1 + currentArray.length) % currentArray.length;
    showWord(currentWordIndex);
}

function showWords() {
    currentArray = words;
    currentWordIndex = 0;
    showWord(currentWordIndex);
}

function showDays() {
    currentArray = daysOfWeek;
    currentWordIndex = 0;
    showWord(currentWordIndex);
}


showWord(currentWordIndex);
