const circle = document.getElementById('circle');
/*const background = document.getElementById('background');

// Clonar el rectángulo
const clone = background.cloneNode(true);
clone.setAttribute('id', 'background-clone');
document.querySelector('svg').appendChild(clone);

// Animar el clon
clone.style.transform = 'translate(50px, 50px)'; // Moverlo ligeramente para que se vea el clon

*/
/*After here is other coding */

let scale = 1;
let growing = true;

function animateCircle() {
  if (growing) {
    scale += 0.01;
    if (scale >= 1.5) {
      growing = false;
    }
  } else {
    scale -= 0.01;
    if (scale <= 1) {
      growing = true;
    }
  }

  circle.setAttribute('transform', `scale(${scale})`);
  requestAnimationFrame(animateCircle);
}

animateCircle();
