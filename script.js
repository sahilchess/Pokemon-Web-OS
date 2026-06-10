const backgroundImages = [
  'assets/bg-images/image1.png',
  'assets/bg-images/image2.jpg',
  'assets/bg-images/image3.jpg',
  'assets/bg-images/image4.jpg',
  'assets/bg-images/image5.jpg',
  'assets/bg-images/image6.webp',
  'assets/bg-images/image7.jpeg',
  'assets/bg-images/image8.gif',
  'assets/bg-images/image9.gif',
  'assets/bg-images/image10.gif',
  'assets/bg-images/image11.gif'
];

let currentBackground = 0;




function setBackground() {
  document.body.style.backgroundImage = `url('${backgroundImages[currentBackground]}')`;
  currentBackground = (currentBackground + 1) % backgroundImages.length;
}

setBackground();
setInterval(setBackground, 2000);



function playTheme() {
  const audio = new Audio("assets/pokemon_pokemon-theme-gotta-catch-em-all-master.mp3");
  const button = document.getElementById("playBtn");
  button.addEventListener("click", () => {
  audio.currentTime = 0;  
  audio.play();
});}
