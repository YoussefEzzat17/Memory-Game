let images = [
  './images/1.gif',
  './images/2.gif',
  './images/3.gif',
  './images/4.gif',
  './images/5.gif',
  './images/6.gif',
  './images/1.gif',
  './images/2.gif',
  './images/3.gif',
  './images/4.gif',
  './images/5.gif',
  './images/6.gif'
];

const moon = './images/Moon.gif';
let pic1 = null;
let pic2 = null;
let match = 0;
const winMessage = document.getElementById('win-message');

const img = document.querySelectorAll(".card img"); 
images = images.sort(() => Math.random() - 0.5); 

img.forEach((image, i) => {
  image.realImage = images[i];
  image.src = moon;
  image.selected = false;
  image.addEventListener('click', flipCard);
});

function flipCard() {
  if (this.selected || pic1 === this || pic2 === this) return;
  
  if (!pic1) {
    pic1 = this;
    this.src = this.realImage;
    this.selected = true;
  } else if (!pic2) {
    pic2 = this;
    this.src = this.realImage;
    this.selected = true;

    if (pic1.realImage === pic2.realImage) {
      match++;
      pic1 = null;
      pic2 = null;

      if (match === 6) {
        winMessage.style.display = "block"; 
      }
    } else {
      setTimeout(() => {
        pic1.src = moon;
        pic2.src = moon;
        pic1.selected = false;
        pic2.selected = false;
        pic1 = null;
        pic2 = null;
      }, 500);
    }
  }
}
