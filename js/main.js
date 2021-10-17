const board = document.querySelector('#board');
const colors = ['#764ba2', '#3f2b96', '#dd1818', '#3f5efb','#7303c0','#8e44ad','#78ffd6','#30e8bf'];
const SQUEARSE_NUMBER = 504;

for (let i = 0; i < SQUEARSE_NUMBER; i++) {
   const square = document.createElement('div');
   square.classList.add('square');

   square.addEventListener('mouseover', () => {
      setColor(square)
   })
   square.addEventListener('mouseleave', () => {
      removeColor(square)
   })
   board.append(square)
}

function setColor(elem) {
   const color = getRendomColor()
   elem.style.backgroundColor = color;
   elem.style.boxShadow = `0 0 5px ${color}, 0 0 20px ${color}`
}

function removeColor(elem) {
   elem.style.backgroundColor = '#1d1d1d';
   elem.style.boxShadow = `0 0 2px #000`
}

function getRendomColor() {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index]
}