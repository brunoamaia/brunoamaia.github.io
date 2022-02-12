const video = document.querySelector(".video-container")
let windowsInit = window.innerWidth;

function resize() {
  let route = 'https://www.youtube.com/embed/Vy96B0IjAso'
  if (windowsInit < 400) {
    video.innerHTML = `<iframe id="ytplayer" type="text/html" width="280" height="158" 
    src=${route}
    frameborder="0" controls=0 >`
  } else if (windowsInit < 600) {
    video.innerHTML = `<iframe id="ytplayer" type="text/html" width="360" height="203" 
    src=${route}
    frameborder="0" controls=0 >`
  } else {
    video.innerHTML = `<iframe id="ytplayer" type="text/html" width="600" height="338" 
    src=${route}
    frameborder="0" controls=0 >`
  }
}

function modification() {
  let windowsNow = window.innerWidth;
  if (windowsInit != windowsNow) {
    resize()
    windowsInit = windowsNow;
  }

  timer()
}
function timer() {
  setTimeout(modification, 200)
}

resize()
window.onload = modification();