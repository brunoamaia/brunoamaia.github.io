function insertNavBar(currentPage, homeAddress) {

}

function openmenu() {
  event.preventDefault();
  document.getElementById("nav").style.right = "0px";
  document.getElementById("social").style.right = "0px";
}

function closenmenu() {
  event.preventDefault();
  document.getElementById("nav").style.right = "-100%";
  document.getElementById("social").style.right = "-100%";
}


function changeStateMenu() {
  let state = document.getElementById("toggleNavbar").checked;

  state
    ? document.querySelector(".links-pages").style.top = "0px"
    : document.querySelector(".links-pages").style.top = "-100%"
}
