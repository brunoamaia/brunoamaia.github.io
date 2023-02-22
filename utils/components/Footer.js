/* How to use
  import insertFooter from './Footer.js'

  insertFooter('../')
*/

export default function insertFooter(homeAddress) {
  // homeAddress = address to root page (../)

  const footer = `
    <div class="footer-container">
      <div class="footer-columns">
        <div class="ft-column">
          <h3>Navegação</h3>
          
          <div>
            <a href="${homeAddress}">Home</a> 
            <a href="${homeAddress}pages/aboutme">Sobre</a> 
            <a href="${homeAddress}pages/projects">Portfólio</a>
          </div>
        </div>

        <div class="ft-column">
          <h3>Social</h3>

          <div>
            <a href="https://www.linkedin.com/in/brunoamaia94/">LinkedIn</a>
            <a href="https://github.com/brunoamaia">Github</a>
          </div>
        </div>
      </div>

      <div class="footer-infos">
        <p>Entre em contato para conhecer melhor e/ou informar problemas. </p>
      </div>
    </div>
  `
  document.querySelector(".footer-content").innerHTML = footer
}
