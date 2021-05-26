/* How to use
  import {changeStateMenu, insertNavBar} from './Navbar.js'

  insertNavBar('home', '../../../')
  document.querySelector('#toggleNavbar').addEventListener('click', changeStateMenu)
*/

export function insertNavBar(currentPage, homeAddress) {
  // currentPage = current page, use the category (home / autor / projects)
  // homeAddress = address to root page (../)

  const navbar = `
    <nav class="navbar">
      <div class="links-pages">
        <ul class="navbar-nav ">
          <li class="nav-item ${currentPage == 'home' ? 'current' : ''}"> <a href="${homeAddress}"> Home </a> </li>
          <li class="nav-item ${currentPage == 'autor' ? 'current' : ''}"> <a href="${homeAddress}pages/aboutme">Autor</a> </li>
          <li class="nav-item ${currentPage == 'projects' ? 'current' : ''}"> <a href="${homeAddress}pages/projects">Projetos</a> </li>
        </ul>

        <div class="social">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/brunoamaia94/">
                <img src="${homeAddress}/src/icons/linkedin-eee.svg" alt="logo do linkedin">
              </a>
            </li>
            <li>
              <a href="https://github.com/brunoamaia">
                <img src="${homeAddress}/src/icons/github-eee.svg" alt="logo do github">
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mobile-control">
        <div class="home">
          <a href="${homeAddress}/"><img src="${homeAddress}/src/icons/home-eee.svg" alt="Voltar para a página inicial"> </a>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="toggleNavbar">
          <label class="checkbox" for="toggleNavbar">
            <div class="trace"></div>
            <div class="trace"></div>
            <div class="trace"></div>
          </label>
        </div>
      </div>
    </nav>
  `

  document.querySelector(".insert-navbar").innerHTML = navbar
}

export function changeStateMenu() {
  let state = document.getElementById("toggleNavbar").checked;

  if (state) {
    document.querySelector(".links-pages").style.top = "0px"
    document.querySelector("body").style.overflow = "hidden"
  } else {
    document.querySelector(".links-pages").style.top = "-100%"
    document.querySelector("body").style.overflow = "visible"
  }
}
