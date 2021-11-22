// Triangle dans un rectangle :
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(75, 50)
ctx.lineTo(100, 75)
ctx.lineTo(100, 25)
ctx.closePath()
// ctx.lineTo(75, 50) // Dessine en bougant les coordonées du crayon sur l'écran
ctx.stroke()
// ctx.fill()

// Rectangle avec dégradé de couleurs :
let canvas2 = document.getElementById('canvas2')
let ctx2 = canvas2.getContext('2d') // Sert à avoir le contexte 2d pour manipuler le contenu, la 3d existe aussi

for (let i = 0; i < 6; i++) {
  // 1ère itération, carré
  for (j = 0; j < 6; j++) {
    // J va de 0 a 5, 6 carrés, douvle boucles for
    ctx2.fillStyle = `rgb(${255 - 42.5 * i}, ${255 - 42.5 * j}, ${42.5 * i})` // red, green, blue
    ctx2.fillRect(j * 25, i * 25, 25, 175)
  }
} // à chaque j on crée une ligne de 6 carrés

// Les cercles :
let canvas3 = document.getElementById('canvas3')
let ctx3 = canvas3.getContext('2d')

ctx3.beginPath()
ctx3.arc(75, 75, 50, 0, 2 * Math.PI) // méthode pour dessiner un arc de cercle
ctx3.lineTo(125, 75)
ctx3.stroke()
ctx3.fillStyle = 'red'
ctx3.fill()

// Incruster du texte :
let canvas4 = document.getElementById('canvas4')
let ctx4 = canvas4.getContext('2d')

ctx4.font = '40px serif'
// ctx4.strokeText('Hello World', 40, 80)
ctx4.fillStyle = 'blue'
ctx4.fillText('Hello World', 40, 80) // Texte rempli

// Redimensions
let canvas5 = document.getElementById('canvas5')
let ctx5 = canvas5.getContext('2d')

// canvas5.setAttribute('width', '400') // Pour changer la taille de notre canvas
// canvas5.setAttribute('height', '200')

// window.addEventListener('resize', function () {
//   canvas5.width = window.innerWidth // Prend tout l'espace
//   canvas5.height = window.innerHeight
//   init()
// })

function init() {
  ctx5.font = '40px serif'
  ctx5.strokeText('Hello World', 40, 280)

  // save AND restore, propriétés enregistrées
  ctx5.fillRect(0, 0, 150, 150)
  ctx5.save()

  ctx5.fillStyle = 'darkblue'
  ctx5.fillRect(15, 15, 120, 120)
  ctx5.save()

  ctx5.fillStyle = 'yellow'
  ctx5.fillRect(30, 30, 90, 90)

  ctx5.restore() // Restaure les propriétés de la sauvegarde
  ctx5.fillRect(45, 45, 60, 60)
}
init()

let canvas6 = document.getElementById('canvas6')
let ctx6 = canvas6.getContext('2d')

function init2() {
  ctx6.translate(95, 75) // Deplace l'affichage
  ctx6.fillRect(0, 0, 100, 120)
  ctx6.fillRect(100, 100, 100, 120) // Le translate s'applique aussi à lui

  ctx6.setTransform(1, 0, 0, 1, 0, 0) // réinitialiser position ou déformation
  ctx6.fillStyle = 'darkred'
  ctx6.fillRect(0, 0, 100, 120)
}
init2()

let canvas7 = document.getElementById('canvas7')
let ctx7 = canvas7.getContext('2d')

function rotate() {
  ctx7.beginPath()
  ctx7.arc(150, 150, 1, 0, 2 * Math.PI)
  ctx7.stroke() // Point central

  ctx7.translate(20, 20)
  ctx7.rotate((20 * Math.PI) / 180)
  ctx7.fillRect(50, 50, 100, 120) // Rectangle qui tourne autour
}
rotate()

// Ajout d'image dans un cadre canevas
let canvas8 = document.getElementById('canvas8')
let ctx8 = canvas8.getContext('2d')
let imgRandom = new Image()
imgRandom.src = 'https://source.unsplash.com/random'

canvas8.width = window.innerWidth // Prend tout l'espace
canvas8.height = window.innerHeight

window.addEventListener('resize', function () {
  canvas8.width = window.innerWidth
  canvas8.height = window.innerHeight
  image()
  ctx8.drawImage(imgRandom, 50, 50)
})

function image() {
  imgRandom.addEventListener('load', function () {
    ctx8.drawImage(imgRandom, 50, 50)
  })
}
image()

// Animation frame with circle :
let canvas9 = document.getElementById('canvas9')
let ctx9 = canvas9.getContext('2d')

canvas9.width = window.innerWidth
canvas9.height = window.innerHeight

window.addEventListener('resize', function () {
  canvas9.width = window.innerWidth
  canvas9.height = window.innerHeight
  anim()
})

let x = 200 // placement horizontal
let v = 5 // vitesse

function anim() {
  requestAnimationFrame(anim)
  ctx9.clearRect(0, 0, innerWidth, innerHeight)
  console.log('Hello')

  ctx9.beginPath()
  ctx9.arc(x, 200, 60, 0, Math.PI * 2)
  ctx9.strokeStyle = 'crimson'
  ctx9.stroke()

  if (x + 60 > innerWidth || x - 60 < 0) {
    v = -v
  }

  x += v
}
anim()

// API donnant IMG en aléatoire : https://source.unsplash.com/random via https://source.unsplash.com/

// Mouse click and move :
// let canvas10 = document.getElementById('canvas10')
// let ctx10 = canvas10.getContext('2d')

// canvas10.width = window.innerWidth
// canvas10.height = window.innerHeight

// window.addEventListener('resize', function () {
//   canvas10.width = window.innerWidth
//   canvas10.height = window.innerHeight
//   mouse()
// })

// let x = 200
// let y = 200
// let v = 5 // vitesse

// function mouse() {
//   requestAnimationFrame(mouse)
//   ctx10.clearRect(0, 0, innerWidth, innerHeight)
//   console.log('Hello')

//   ctx10.beginPath()
//   ctx10.arc(x, 200, 60, 0, Math.PI * 2)
//   ctx10.strokeStyle = 'crimson'
//   ctx10.stroke()

//   if (x + 60 > innerWidth || x - 60 < 0) {
//     v = -v
//   }

//   x += v
// }
// mouse()

let canvas10 = document.getElementById('canvas10')
let ctx10 = canvas10.getContext('2d')

// Brouillon d'aide
// Propriété pour faire des caractéristiques
// Methode sert à créer des dimensions ou coordonées

// ctx.strokeRect(30, 30, 100, 50) // Stroke ne prend que les contours du rectangle sans le remplir de couleur
// ctx.fillStyle = 'rgba(200,0,0,0.6)' // Propriété CSS en JS
// ctx.fillRect(30, 30, 100, 50) // fill/remplir Rect/rectangle ; coordonnées x puis y, largeur puis hauteur
// ctx.clearRect(0, 0, 302, 152) // effacement ; x, y innerWidth, innerHeight pour toute la largeur de l'écran, utile pour créer l'animation

// ctx.beginPath() // Lancement du dessin
// ctx.lineWidth = '8' // Prend 8 fois la largeur du contour de base
// ctx.strokeStyle = 'green' // Style du coup de crayon
// ctx.rect(50, 50, 100, 50) // Dessine rectangle
// ctx.fill() // remplir
// ctx.stroke() // contours
