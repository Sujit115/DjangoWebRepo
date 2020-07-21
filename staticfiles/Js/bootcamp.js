const mainContainer = document.querySelector('.bootcamp-data-container');

let moving = false;
let mouseLastPosition = 0;
let transform = 0;
let lastPageX = 0;
let transformValue = 0;
window.addEventListener('pointerdown', (e) => {
  moving = true;
  mouseLastPosition = e.pageX;
  transform = window.getComputedStyle(mainContainer)
  .getPropertyValue('transform') !== 'none'
  ? window.getComputedStyle(mainContainer)
  .getPropertyValue('transform').split(',')[4].trim()
  : 0;
  console.log(transform);
});

window.addEventListener('pointermove', (e) => {
  if (moving) {
   const diffX =  e.pageX - mouseLastPosition;
   console.log('This is positive while right to left',e.pageX-lastPageX)
   if (e.pageX - lastPageX > 0) {
     if (transformValue > 0) {
       return;
     }
   } else {
     if (Math.abs(transformValue) > (mainContainer.scrollWidth-window.innerWidth)) {
       return;
     }
   }
    transformValue = parseInt(transform) + diffX;
    mainContainer.style.transform = `translateX(${transformValue}px)`;
  }
  lastPageX = e.pageX;
})

window.addEventListener('pointerup', () => {
  moving = false;
});


var inputSearch = document.getElementById('search')
var datalist = document.getElementById('datalist')

async function searchit(){
  var res = await fetch('http://127.0.0.1:8000/homepage/bootcampdata/')
  var data = await res.json()
  console.log(data)
  for(i in data){
    var options = document.createElement('option')
    options.value = data[i]
    datalist.appendChild(options)
  }

}

searchit()