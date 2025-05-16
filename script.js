let displayTime = document.getElementById("show-time");
let displayPara = document.getElementById("show-paragraph");
let textarea = document.getElementById("textarea");
let button = document.getElementById("str");
let restartBtn = document.getElementById("restart-btn");

let displayWpm = document.getElementById("wpm");
let displayAccuracy = document.getElementById("accuracy");
let displayCorrectWords = document.getElementById("correct");
let displayIncorrectWords = document.getElementById("incorrect");

let timer;

button.addEventListener("click", () => {
  let time = 30;
  let paragraphs = [
    "The morning breeze gently touches the leaves as sunlight filters through the trees, creating a golden glow on the ground.Birds fly high above the rooftops, singing sweet songs that echo across the quiet neighborhood.",
    "Technology has made our lives easier by helping us connect with people, learn new things, and solve problems quickly.With just a mobile phone or laptop, we can explore the world from the comfort of our home.",
    "Every person faces challenges in life, but those who keep trying always find a way to succeed.Hard work, patience, and a positive attitude can turn failure into success over time.",
    "On a rainy day, the sky turns grey and the sound of raindrops creates a peaceful melody outside the window.People walk with umbrellas, and the streets shine with reflections of lights and puddles.",
    "The library is a quiet place filled with books that open doors to new ideas, stories, and adventures.Readers sit peacefully in corners, lost in pages that take them to different worlds.",
  ];

  let randomIndex = Math.floor(Math.random() * paragraphs.length);
  displayPara.innerText = paragraphs[randomIndex];
  button.style.display = "none";
  textarea.disabled = false;
  timer = setInterval(() => {
    time--;
    displayTime.innerText = time;

    if (time == 0) {
      clearInterval(timer);
      textarea.disabled = true;
      restartBtn.style.display = "block";
      results();
    }
  }, 1000);
});

function results() {
  let inputVal = textarea.value.trim();
  let displayedParaVal = displayPara.innerText;
  let inputValWords = inputVal.split(/\s+/);
  let displayedParaValWords = displayedParaVal.split(/\s+/);

  let correctWords = 0;
  let incorrectWords = 0;

  for (let i = 0; i < inputValWords.length; i++) {
    if (inputValWords[i] == displayedParaValWords[i]) {
      correctWords++;
    } else {
      incorrectWords++;
    }
  }

  let timeInMins = 30 / 60;

  let wpm = correctWords / timeInMins;
  let accuracy = ((correctWords / inputValWords.length) * 100).toFixed(2);

  displayWpm.innerText = wpm;
  displayAccuracy.innerText = accuracy + "%";
  displayCorrectWords.innerText = correctWords;
  displayIncorrectWords.innerText = incorrectWords;
}

restartBtn.addEventListener("click", () => {
  displayPara.innerText = "Please Click on start button to start. Remember you have 30 second to type"
  textarea.value = ""
  restartBtn.style.display = "none";
  button.style.display = "block";
  displayWpm.innerText = "00";
  displayAccuracy.innerText = "00";
  displayCorrectWords.innerText = "00";
  displayIncorrectWords.innerText = "00";
});
   
