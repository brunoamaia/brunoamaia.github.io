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
