const bodyEl = document.querySelector("body");
const startBtnEl = document.getElementById("btn");
const messageEl = document.getElementById("message");

let result = false;

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();

recognition.lang = "en-US";

startBtnEl.addEventListener("click", () => {

  if (!result) {
    recognition.start();
  }

  result = true;
  messageEl.textContent = "Say a CSS color!";
});

recognition.onresult = function (event) {
  const color = event.results[0][0].transcript;
  
  bodyEl.style.backgroundColor = color.replace(" ", "");
  messageEl.textContent = `You're color is: ${color}`;
};

recognition.onspeechend = function (e) {
  result = false;
};
