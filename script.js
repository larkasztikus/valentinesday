const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const message = document.getElementById("message");

let yesScale = 1;

// save original position of NO
const originalNoLeft = noButton.style.left;
const originalNoTop = noButton.style.top;

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 80;

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  // YES grows
  yesScale += 0.15;
  yesButton.style.transform = `scale(${yesScale})`;
});

yesButton.addEventListener("click", () => {
  // reset YES
  yesScale = 1;
  yesButton.style.transform = "scale(1)";

  // return NO to original place
  noButton.style.left = "auto";
  noButton.style.top = "auto";
  noButton.style.right = "40px";

  message.textContent = "YAY 🥰 I can’t wait to be your Valentine 💕";
});