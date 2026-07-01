// -----------------------------------------------THE TIME-------------------------------------------------------

function changeTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#timeThingy");
  timeText.innerHTML = currentTime
}
changeTime();
setInterval(changeTime, 500);


// -----------------------------------------------THE SONG-------------------------------------------------------

function playTheme() {
  const audio = new Audio("assets/pokemon_theme.mp3");
  audio.volume = 0.3;
  const button = document.getElementById("playBtn");
  button.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
  });
}


// -----------------------------------------------DESKTOP WINDOW AND ICONS CODE-------------------------------------------------------

var selectedIcon = undefined

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
}

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}


// -----------------------------------------------THE MOVEABLE WINDOW CODE BELOW, CREDIT TO W3SCHOOLS-------------------------------------------------------



function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



// -----------------------------------------------THE WINDOW GOING TO THE TOP WITH Z-INDEX-------------------------------------------------------

var biggestIndex = 1;

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () => handleWindowTap(element))
}

var topBar = document.querySelector("#top-bar")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
  handleIconTap(document.querySelector("#" + element.id + "icon"))
}





// -----------------------------------------------CONTENT FOR POKE RECORDS-------------------------------------------------------

var PRcontent = [
  {
    title: "Welcome to PokéRecords!",
    date: "6/18/2026",
    content: `
      <p contenteditable="true" class="text-font" style="margin: 16px; line-height: 1.6;">
        Welcome! This is a simple text editor for your Pokémon records.
        You can write down your Pokémon team, their moves, and any other info you want to keep track of.
        <br><br>
        <strong>Ctrl+B</strong> to bold, <i>Ctrl+I</i> to italicize,
        <span style="text-decoration: underline;">Ctrl+U</span> to underline.
        <br><br>
        Now you might notice how you can edit this, but let's make it cooler!
        <br><br>
        <span style="display: block; text-align: center;">
          ~~~ Made with ❤️ ~~~
          <br>
          By <i>@Sahild</i>
        </span>
      </p>
    `
  },
  {
    title: "Pokémon Team",
    date: "6/18/2026",
    content: `
      <p contenteditable="true" class="text-font" style="margin: 16px; line-height: 1.6;">
        Here's my Pokémon team:
        <br><br>
        1. Pikachu - Electric Type<br>
        2. Charizard - Fire/Flying Type<br>
        3. Bulbasaur - Grass/Poison Type<br>
        4. Squirtle - Water Type<br>
        5. Jigglypuff - Normal/Fairy Type<br>
        6. Gengar - Ghost/Poison Type
      </p>
    `
  },
  {
    title: "Pokémon Moves",
    date: "6/18/2026",
    content: `
      <p contenteditable="true" class="text-font" style="margin: 16px; line-height: 1.6;">
        Here are some moves my Pokémon can learn:
        <br><br>
        - Pikachu: Thunderbolt, Quick Attack, Iron Tail<br>
        - Charizard: Flamethrower, Fly, Dragon Claw<br>
        - Bulbasaur: Vine Whip, Razor Leaf, Sleep Powder<br>
        - Squirtle: Water Gun, Bubble, Hydro Pump<br>
        - Jigglypuff: Sing, Double Slap, Hyper Voice<br>
        - Gengar: Shadow Ball, Sludge Bomb, Dark Pulse
      </p>
    `
  }
]

function setPRContent(indexPR) {
  document.querySelector("#poke-records-content").innerHTML = PRcontent[indexPR].content
}

function addToPRSideBar(indexPR) {
  var sideBar = document.querySelector("#poke-records-sidebar")
  var records = PRcontent[indexPR]
  var newDiv = document.createElement("div")
  newDiv.style.cursor = "pointer"
  newDiv.style.padding = "8px 16px"
  newDiv.innerHTML = `
    <p class="subheading-font" style="margin: 0; font-size: 16px;">${records.title}</p>
    <p class="text-font" style="margin: 0; font-size: 12px;">${records.date}</p>
    <div style="cursor: default; margin: 0; font-size: 12px; height: 30px  ;"></div>
  `
  newDiv.addEventListener("click", function() {
    setPRContent(indexPR)
  })
  sideBar.appendChild(newDiv)
}

for (let i = 0; i < PRcontent.length; i++) {
  addToPRSideBar(i)
}

setPRContent(0)



// -----------------------------------------------CONTENT FOR image carousel-------------------------------------------------------

var ICcontent = [
  {
    img: `<img src="assets/ic-images/ic1.avif" alt="IC Image 1">`,
  },
  {
    img: `<img src="assets/ic-images/ic2.jpg" alt="IC Image 2">`,
  },
  {
    img: `<img src="assets/ic-images/ic3.avif" alt="IC Image 3">`,
  },
  {
    img: `<img src="assets/ic-images/ic4.avif" alt="IC Image 4">`,
  },
  {
    img: `<img src="assets/ic-images/ic5.avif" alt="IC Image 5">`,
  },
  {
    img: `<img src="assets/ic-images/ic6.avif" alt="IC Image 6">`,
  },
  {
    img: `<img src="assets/ic-images/ic7.avif" alt="IC Image 7">`,
  },
  {
    img: `<img src="assets/ic-images/ic8.avif" alt="IC Image 8">`,
  },
  {
    img: `<img src="assets/ic-images/ic9.avif" alt="IC Image 9">`,
  },
  {
    img: `<img src="assets/ic-images/ic10.avif" alt="IC Image 10">`,
  },
  {
    img: `<img src="assets/ic-images/ic11.avif" alt="IC Image 11">`,
  },
  {
    img: `<img src="assets/ic-images/ic12.avif" alt="IC Image 12">`,
  },
  {
    img: `<img src="assets/ic-images/ic13.avif" alt="IC Image 13">`,
  },
  {
    img: `<img src="assets/ic-images/ic14.avif" alt="IC Image 14">`,
  },
  {
    img: `<img src="assets/ic-images/ic15.avif" alt="IC Image 15">`,
  },
  {
    img: `<img src="assets/ic-images/ic16.avif" alt="IC Image 16">`,
  },
  {
    img: `<img src="assets/ic-images/ic17.avif" alt="IC Image 17">`,
  },
  {
    img: `<img src="assets/ic-images/ic18.avif" alt="IC Image 18">`,
  },
  {
    img: `<img src="assets/ic-images/ic19.jpg" alt="IC Image 19">`,
  },
]

let indexIC = 0;

function setICContent(i) {
  document.querySelector("#image-carousel-content").innerHTML = ICcontent[i].img;
}

const prevBtn = document.getElementById("prev-btn");
prevBtn.addEventListener("click", () => {
  indexIC = indexIC > 0 ? indexIC - 1 : ICcontent.length - 1;
  setICContent(indexIC);
});

const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => {
  indexIC = indexIC < ICcontent.length - 1 ? indexIC + 1 : 0;
  setICContent(indexIC);
});

setICContent(0);


// -----------------------------------------------CONTENT FOR Coinflip-------------------------------------------------------

var CFcontent = [
  {
    img: `<img src="assets/coinflip/heads.gif" alt="heads" style="width: 200px; height: 200px;">`,
  },
  {
    img: `<img src="assets/coinflip/tails.gif" alt="tails"  style="width: 200px; height: auto;">`,
  },
  {
    img: `<img src="assets/coinflip/surprised-pikachu.gif" alt="suprised" style="width: 200px; height: 200px;">`,
  },
  {
    img: `<img src="assets/coinflip/coinflip.gif" alt="coinflip" style="width: 200px; height: 200px;">`,
  },
]



let indexCF = 0;

function setCFContent(i) {
  document.querySelector("#coin-result").innerHTML = CFcontent[i].img;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const flipinput = document.getElementById("flip-coin-btn");
flipinput.addEventListener("click", () => {
  setCFContent(3); // show spinning gif
  const result = Math.floor(Math.random() * 2);
  delay(2000).then(() => {
    setCFContent(result);
    if (result === 0) {
      document.querySelector("#coin-result-text").innerHTML = "Heads!";
    } else {
      document.querySelector("#coin-result-text").innerHTML = "Tails! Icons are getting removed!";
      const icon_remove = Math.floor(Math.random() * 5);
      if (icon_remove === 0) {
        document.querySelector("#poke-recordsopen").remove();
        closeWindow(document.querySelector("#poke-records"));
      } else if (icon_remove === 1) {
        document.querySelector("#video-screenopen").remove();
        closeWindow(document.querySelector("#video-screen"));
      } else if (icon_remove === 2) {
        document.querySelector("#image-carouselopen").remove();
        closeWindow(document.querySelector("#image-carousel")); 
      } else if (icon_remove === 3) {
        document.querySelector("#coin-flipopen").remove();
        closeWindow(document.querySelector("#coinflip"));
      } else if (icon_remove === 4) {
        document.querySelector("#welcomeopen").remove();
        closeWindow(document.querySelector("#welcome"));
      }
    }
  });
});



setCFContent(2);




// -----------------------------------------------INITIALIZE THE WINDOWS-------------------------------------------------------





dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("poke-records"));
dragElement(document.getElementById("video-screen"));
dragElement(document.getElementById("image-carousel"));
dragElement(document.getElementById("coinflip"));



var welcomeScreen = document.querySelector("#welcome")
var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")

var prScreen = document.querySelector("#poke-records")
var prScreenClose = document.querySelector("#poke-recordsclose")
var prScreenOpen = document.querySelector("#poke-recordsopen")

var videoScreen = document.querySelector("#video-screen")
var videoScreenClose = document.querySelector("#video-screenclose")
var videoScreenOpen = document.querySelector("#video-screenopen")

var imageScreen = document.querySelector("#image-carousel")
var imageScreenClose = document.querySelector("#image-carouselclose")
var imageScreenOpen = document.querySelector("#image-carouselopen")

var coinflipScreen = document.querySelector("#coinflip")
var coinflipScreenClose = document.querySelector("#coinflipclose")
var coinflipScreenOpen = document.querySelector("#coin-flipopen")


welcomeScreenClose.addEventListener("click", function() { closeWindow(welcomeScreen); });
welcomeScreenOpen.addEventListener("click", function() { openWindow(welcomeScreen); });

prScreenClose.addEventListener("click", function() { closeWindow(prScreen); });
prScreenOpen.addEventListener("click", function() { openWindow(prScreen); });

videoScreenClose.addEventListener("click", function() { closeWindow(videoScreen); });
videoScreenOpen.addEventListener("click", function() { openWindow(videoScreen); });

imageScreenClose.addEventListener("click", function() { closeWindow(imageScreen); });
imageScreenOpen.addEventListener("click", function() { openWindow(imageScreen); });

coinflipScreenClose.addEventListener("click", function() { closeWindow(coinflipScreen); });
coinflipScreenOpen.addEventListener("click", function() { openWindow(coinflipScreen); });


addWindowTapHandling(welcomeScreen)
addWindowTapHandling(prScreen)
addWindowTapHandling(videoScreen)
addWindowTapHandling(imageScreen)
addWindowTapHandling(coinflipScreen)
