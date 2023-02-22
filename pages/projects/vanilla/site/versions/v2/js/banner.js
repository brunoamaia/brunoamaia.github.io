const figure = window.document.querySelector(".ilustracao")
const text = window.document.querySelector(".text")
const link = window.document.querySelector(".lin")


const figureArray = [
  `<figure>
  <a href="../../../../frontend/gamequiz">
  <img src="./src/portifolio/gamequiz.png" alt="Imagem da página do gamquiz">
  </a>
  </figure>`,
  `<figure>
  <a href="../../../../fullstack/delivery">
  <img src="./src/portifolio/delivery.png" alt="Imagem da página do delivery">
  </a>
  </figure>`,
  `<figure>
  <a href="../../../../apps/calculadora">
  <img src="./src/portifolio/calculadora.png" alt="Imagem do aplicativo de calculadora">
  </a>
  </figure>`,
  `<figure>
    <a href="../../../../fullstack/Ecoleta/">
      <img src="./src/portifolio/ecolet.png" alt="Imagem da landing Pagina da Ecoleta">
    </a>
  </figure>`,
  `<figure>
    <a href="../../../../games/flappybird">
      <img src="./src/portifolio/Flapy.png" alt="Imagem do jogo Flappy bird">
    </a>
  </figure>`,
  `<figure>
    <a href="../../../../fullstack/variadoflix/">
      <img src="./src/portifolio/variadoflix.png" alt="Imagem do Variado flix">
    </a>
  </figure>`,
  `<figure>
    <a href="../../../../frontend/podcastr/">
      <img src="./src/portifolio/podcastr.png" alt="Imagem do Podcastr">
    </a>
  </figure>`
]

const textArray = [
  `<p>
  <b>Game quiz</b> <br>
    Quiz sobre jogos clássicos.
  </p>`,
  `<p>
  <b>Delivery</b> <br>
    Plataforma de fazer e entregar pedidos.
  </p>`,
  `<p>
  <b>Calculadora</b> <br>
    Calculadora básica feita com JavaScript.
  </p>`,
  `<p>
    <b>Ecoleta</b> <br>
    Plataforma para auxiliar no descarte de materiais recicláveis.
  </p>`,
  `<p>
    <b>Flappy bird</b> <br>
    Réplica desse famoso jogo utilizando Canvas.
  </p>`,
  `<p>
    <b>Variadoflix</b> <br>
    Plataforma que "copia" a interface da Netflix. A plataforma está disponível.
  </p>`,
  `<p>
    <b>Podcastr</b> <br>
    Plataforma para listar e ouvir podcast.
  </p>`
]

const linkArray = [
  `<button><a href="../../../../frontend/gamequiz/"> Ver projeto </a></button>`,
  `<button><a href="../../../../fullstack/delivery/"> Ver projeto </a></button>`,
  `<button><a href="../../../../apps/calculadora/"> Ver projeto </a></button>`,
  `<button><a href="../../../../fullstack/Ecoleta/"> Ver projeto </a></button>`,
  `<button><a href="../../../../games/flappybird/"> Ver projeto </a></button>`,
  `<button><a href="../../../../fullstack/variadoflix/"> Ver projeto </a></button>`,
  `<button><a href="../../../../frontend/podcastr/"> Ver projeto </a></button>`
]


let n = figureArray.length;
let position = 0;


function previousProject() {
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

function nextProject() {
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
  count = setTimeout(nextProject, 3000)
}

function stopTimer() {
  clearTimeout(count);
}

function clickPrevious () {
  stopTimer()
  previousProject()
//  document.querySelector('.circle').style.animation = "count";
//  document.querySelector('.circle').style.animation = "countdown 3s linear infinite forwards";
}
function clickNext() {
  stopTimer()
  nextProject()
}

window.onload = timer();


function changeStateMenu() {
  let state = document.getElementById("toggleNavbar").checked;

  if (state) {
    document.querySelector(".links-pages").style.top = "0px"
    document.querySelector("body").style.overflow = "hidden"
  } else {
    document.querySelector(".links-pages").style.top = "-100%"
    document.querySelector("body").style.overflow = "visible"
  }
}