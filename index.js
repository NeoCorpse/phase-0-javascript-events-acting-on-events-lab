// Your code here

const dodger = document.querySelector("#dodger");
dodger.style.backgroundColor = "#FF69B4";
const game = document.querySelector("#game");

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") moveDodgerLeft();
  else if (e.key === "ArrowRight") moveDodgerRight();
  else if (e.key === "ArrowUp") {
    let bottom = dodger.style.bottom.replace("px", "");
    if (bottom >= 380) return;
    dodger.style.bottom = `${+bottom + 5}px`;
  } else if (e.key === "ArrowDown") {
    let bottom = dodger.style.bottom.replace("px", "");
    if (bottom <= 0) return;
    dodger.style.bottom = `${+bottom - 5}px`;
  }
});

function moveDodgerLeft() {
  let left = dodger.style.left.replace("px", "");
  if (left <= 0) return;
  dodger.style.left = `${+left - 5}px`;
}

function moveDodgerRight() {
  let left = dodger.style.left.replace("px", "");
  if (left >= 360) return;
  dodger.style.left = `${+left + 5}px`;
}
