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

dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("poke-records"));

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


var welcomeScreen = document.querySelector("#welcome")
var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")

var prScreen = document.querySelector("#poke-records")
var prScreenClose = document.querySelector("#poke-recordsclose")
var prScreenOpen = document.querySelector("#poke-recordsopen")

welcomeScreenClose.addEventListener("click", function() { closeWindow(welcomeScreen); });
welcomeScreenOpen.addEventListener("click", function() { openWindow(welcomeScreen); });
prScreenClose.addEventListener("click", function() { closeWindow(prScreen); });
prScreenOpen.addEventListener("click", function() { openWindow(prScreen); });


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

function initializeWindow(elementName) {
  var screen = document.querySelector("#" + elementName)
  addWindowTapHandling(screen)
  makeClosable(elementName)
  dragElement(screen)
}

addWindowTapHandling(welcomeScreen)
addWindowTapHandling(prScreen)


// -----------------------------------------------CONTENT FOR POKE RECORDS-------------------------------------------------------

var content = [
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

function setNotesContent(index) {
  document.querySelector("#poke-records-content").innerHTML = content[index].content
}

function addToSideBar(index) {
  var sideBar = document.querySelector("#poke-records-sidebar")
  var note = content[index]
  var newDiv = document.createElement("div")
  newDiv.style.cursor = "pointer"
  newDiv.style.padding = "8px 16px"
  newDiv.innerHTML = `
    <p class="subheading-font" style="margin: 0; font-size: 16px;">${note.title}</p>
    <p class="text-font" style="margin: 0; font-size: 12px;">${note.date}</p>
  `
  newDiv.addEventListener("click", function() {
    setNotesContent(index)
  })
  sideBar.appendChild(newDiv)
}

for (let i = 0; i < content.length; i++) {
  addToSideBar(i)
}

setNotesContent(0)