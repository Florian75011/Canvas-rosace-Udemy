// Une seconde rosace qui apparaît différemment :
let canvas = document.getElementById('canvas2');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 0;
let y = 0;
let turn = 0;
ctx.translate(innerWidth / 2, innerHeight / 2);

function draw() {
  requestAnimationFrame(draw);

  // Création du cercle
  ctx.beginPath();
  ctx.strokeStyle = '#FF7F50';
  ctx.arc(x, y, 100, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.rotate((60 * Math.PI) / 180);
  turn = turn + 60;

  if (turn > 7200) {
    return;
  }
  if (turn % 360 === 0) {
    x += 12;
    y += 12;
  }
}
draw();