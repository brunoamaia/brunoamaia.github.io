var i = 0;
var txt = ' issso tudo';
var speed = 50;

function typeWriter() {
  document.querySelector(".change-text").innerHTML = ''
  if (i < txt.length) {
    document.querySelector(".change-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

