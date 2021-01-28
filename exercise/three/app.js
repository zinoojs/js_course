const text = document.querySelector("#text");
text.style.color = "yellow";
text.style.fontSize = "33px";
let left = 0;
let path = "right";
let moveText = setInterval(move, 10);
function move() {
  if (path === "right") {
    left++;
    if (left > 280) path = "left";
  } else {
    left--;
    if (left < 1) path = "right";
  }
  text.style.left = `${left}px`;
}
function start() {
  moveText = setInterval(move, 10);
}
function stop() {
  clearInterval(moveText);
}
