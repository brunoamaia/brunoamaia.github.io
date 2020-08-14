const figure = window.document.querySelector(".ilustracao")
const text = window.document.querySelector(".text")
const link = window.document.querySelector(".lin")


const figureArray = [
  `<figure>
  <a href="./pages/projects/apps/calculadora">
  <img src="./src/portifolio/calculadora.png" alt="">
  </a>
  </figure>`,
  `<figure>
    <a href="./pages/projects/Ecoleta">
      <img src="./src/portifolio/ecolet.png" alt="">
    </a>
  </figure>`,
  `<figure>
    <a href="./pages/projects/games/flappybird">
      <img src="./src/portifolio/Flapy.png" alt="">
    </a>
  </figure>`,
  `<figure>
    <a href="./pages/projects/Variadoflix">
      <img src="./src/portifolio/variadoflix.png" alt="">
    </a>
  </figure>`
]

const textArray = [
  `<p>
  <b>Calculadora</b> <br>
  Calculadora básica feita com JavaScript.
  </p>`,
  `<p>
    <b>Ecoleta</b> <br>
    Plataforma para auxilar no descarte de materiais recicláveis.
  </p>`,
  `<p>
    <b>Flappy bird</b> <br>
    Réplica desse famoso jogo utilizando Canvas.
  </p>`,
  `<p>
    <b>Variadoflix</b> <br>
    Plataforma que "copia" a interface da Netflix. A plataforma está disponível.
  </p>`
]

const linkArray = [
  `<p><a href="./pages/projects/apps/calculadora"> Ver mais ... </a></p>`,
  `<p><a href="./pages/projects/Ecoleta"> Ver mais ... </a></p>`,
  `<p><a href="./pages/projects/games/flappybird"> Ver mais ... </a></p>`,
  `<p><a href="./pages/projects/Variadoflix"> Ver mais ... </a></p>`
]


let n = figureArray.length;
let position = 0;


function previousproject() {
  if (position >  0) {
    position -= 1
  } else {
    position = n-1
  }
  figure.innerHTML = figureArray[position]
  text.innerHTML = textArray[position]
  link.innerHTML = linkArray[position]
  timer();
}

function nextproject() {
  if (position < n-1) {
    position += 1
  } else {
    position = 0
  }
  
  figure.innerHTML = figureArray[position]
  text.innerHTML = textArray[position]
  link.innerHTML = linkArray[position]
  timer();
}


function timer() {
  count = setTimeout(nextproject, 3000)
}

function stopTimer() {
  clearTimeout(count);
}

function clickPrevious () {
  stopTimer()
  previousproject()
//  document.querySelector('.circle').style.animation = "count";
//  document.querySelector('.circle').style.animation = "countdown 3s linear infinite forwards";
}
function clickNext() {
  stopTimer()
  nextproject()
}

window.onload = timer();