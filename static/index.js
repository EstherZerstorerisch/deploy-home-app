const crash = new Audio("sounds/crash.mp3");
const kick = new Audio("sounds/kick-bass.mp3");
const snare = new Audio("sounds/snare.mp3");
const tom1 = new Audio("sounds/tom-1.mp3");
const tom2 = new Audio("sounds/tom-2.mp3");
const tom3 = new Audio("sounds/tom-3.mp3");
const tom4 = new Audio("sounds/tom-4.mp3");

const buttons = document.querySelectorAll(".drum");

function makeSound(param) {
  switch (param) {
    case "w":
      crash.play();
      break;
    case "a":
      kick.play();
    case "s":
      snare.play();
    case "d":
      tom1.play();
    case "j":
      tom2.play();
    case "k":
      tom3.play();
    case "l":
      tom4.play();
    default:
      console.log(param);
      break;
  }
}

function makeFlashing(clickedButton) {
  const button = document.querySelector("." + clickedButton).classList;
  button.add("pressed");

  setTimeout(() => {
    button.remove("pressed");
  }, 500);
}

document.addEventListener("keydown", (letterKey) => {
  makeSound(letterKey.key);
  makeFlashing(letterKey.key);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    makeSound(button.innerHTML);
    makeFlashing(button.innerHTML);
  });
});
