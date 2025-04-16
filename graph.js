
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#00ffff";
  ctx.beginPath();
  for (let x = 0; x < canvas.width; x++) {
    let y = canvas.height / 2 + Math.sin(x * 0.01 + t) * 50;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  t += 0.05;
  requestAnimationFrame(draw);
}
draw();
