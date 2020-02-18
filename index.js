//Event Delegation
// let parent = document
//   .querySelector(".set")
//   .addEventListener("click", handleClick);

// =================================================================

function handleClick(event) {
  //  this === event.target
  console.log(this);
  console.log(event.target);
  makeSound(event.target.innerText);
  buttonAnimation(event.target.innerText);
}

// Added event to Each buttom using for loop
let eventArray = document.querySelectorAll("button");
for (const event of eventArray) {
  event.addEventListener("click", handleClick);
}

// Adding Event Listeners to Keyboard Pressed
document.addEventListener("keypress", handleKeyboardEvent);

function handleKeyboardEvent(event) {
  console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
}

const keyAudioMap = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/snare.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/crash.mp3",
  k: "sounds/tom-3.mp3",
  l: "sounds/kick-bass.mp3",
  z: "sounds/tom-4.mp3",
  x: "sounds/tom-3.mp3",
  c: "sounds/tom-4.mp3"
}

function makeSound(key) {
  const audioPath = keyAudioMap[key];
  if (audioPath) {
    new Audio(audioPath).play();
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  document.body.classList.add("modify-body");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
    document.body.classList.remove("modify-body");
  }, 200);
}
