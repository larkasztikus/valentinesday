const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const message = document.getElementById("message");

let yesScale = 1;

// store NO's original position
const noInitialLeft = noButton.offsetLeft;
const noInitialTop = noButton.offsetTop;

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 80;

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  // YES grows every escape
  yesScale += 0.15;
  yesButton.style.transform = `scale(${yesScale})`;
});

yesButton.addEventListener("click", () => {
  // reset YES
  yesScale = 1;
  yesButton.style.transform = "scale(1)";

  // smoothly return NO
  noButton.style.left = `${noInitialLeft}px`;
  noButton.style.top = `${noInitialTop}px`;

  message.textContent = "YAY 🥰 I can’t wait to be your Valentine 💕";
});
