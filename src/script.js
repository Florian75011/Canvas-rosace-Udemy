// Selection de la balise canvas et lancement du contexte
let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');

// Prendre toute la largeur et hauteur de l'écran
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Dessin : initialiser à zéro, cibler le centre du canevas
let x = 0;
let y = 0;
let turn = 0;
ctx.translate(innerWidth / 2, innerHeight / 2);

function draw() {
  requestAnimationFrame(draw);

  // Création du cercle
  ctx.beginPath();
  ctx.strokeStyle = '#EDF5E1';
  ctx.arc(x, y, 100, 0, 2 * Math.PI);
  ctx.stroke();

  // Faire tourner le cercle avec multiplication
  ctx.rotate((15 * Math.PI) / 180);
  turn = turn + 15;

  if (turn > 7200) {
    return;
  }
  if (turn % 360 === 0) {
    x += 10;
    y += 10;
  }
  stopPropagation();
}
draw();


// Une deuxième construite différemment :


// Selection de la balise canvas et lancement du contexte
let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

// Prendre toute la largeur et hauteur de l'écran
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

// Dessin : initialiser à zéro, cibler le centre du canevas
let x2 = 0;
let y2 = 0;
let turn2 = 0;
ctx2.translate(innerWidth / 2, innerHeight / 2);

function draw2() {
  requestAnimationFrame(draw2);

  // Création du cercle
  ctx2.beginPath();
  ctx2.strokeStyle = '#EDF5E1';
  ctx2.arc(x2, y2, 100, 0, 2 * Math.PI);
  ctx2.stroke();

  // Faire tourner le cercle avec multiplication
  ctx2.rotate((30 * Math.PI) / 180);
  turn2 = turn2 + 30;

  if (turn2 > 7200) {
    return;
  }
  if (turn2 % 360 === 0) {
    x2 += 10;
    y2 += 10;
  }
}
draw2();