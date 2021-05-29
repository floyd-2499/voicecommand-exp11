const voice2text = document.querySelector(".voice2text");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

let record = recorder.start();

$(document).ready(function () {
  setInterval(function () {
    let record = recorder.start();
    let audio = new Audio('beep.mp3');
    record;
    audio.play();
    audio.volume = 0.5;
  }, 6000);
  // Landing Page message
  const speech = new SpeechSynthesisUtterance();
  speech.text = "Boss, I'm Ready At your Service. Lets Crack some ideas today";
  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
});

// load.addEventListener("load", () => {
//   record;
// });

recorder.onresult = (e) => {
  const speech = new SpeechSynthesisUtterance();
  console.log(e);

  const resultIndex = e.resultIndex;
  const transcript = e.results[resultIndex][0].transcript;
  const message = transcript;
  console.log(`${transcript}`);
  var element = document.getElementById("container");
  
  element.appendChild(addHumanText(transcript));
 

  if (message.includes("wake up buddy")) {
    speech.text = "Ah. Boss I am ready at your service!";
  }

  speech.text = "Not coded for this input sir";

  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  console.log(`${speech.text}`);
  element.appendChild(addBotText(speech.text));
  // botVoice(transcript); only if you wanna try for some extra function and devide if else refer prev.ideas

};

// setTimeout(function () {
//   window.location.reload();
// }, 7000);  now not required

function addHumanText(text) {
  const chatContainer = document.createElement("div"); //creating html in js
  chatContainer.classList.add("chat-container");

  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");

  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);

  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");

  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");

  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);

  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}
