
const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.5;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let offset = 0;
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#0080ff';

    for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin((x + offset) * 0.02) * 50;
        ctx.lineTo(x, y);
    }

    ctx.stroke();
    offset += 1;
    requestAnimationFrame(draw);
}
draw();
