
const drinks = [
  "../image/drink1.jpg",
  "../image/drink2.jpg",
  "../image/drink3.jpg",
  "../image/drink4.jpg",
  "../image/drink5.jpg"
];

const body = document.body;
const titleBtn = document.getElementById("drink-title");
const drinkImg = document.getElementById("drink-img");

let hasRevealed = false;   
let currentIndex = -1;     


const drinkInfo = [
  { type: "Matcha Latte",      cafe: "Isshiki Matcha" },
  { type: "Americano",    cafe: "Arcane Estate Coffee" },
  { type: "Ice Latte",       cafe: "Fa San" },
  { type: "Ice Matcha",   cafe: "Sorate" },
  { type: "Hot Chocolate",      cafe: "La Cabra" },
];

const overlay      = document.getElementById("drink-overlay");
const drinkTypeEl  = overlay.querySelector(".drink-type");
const drinkCafeEl  = overlay.querySelector(".drink-cafe");

function getRandomDrinkIndex() {
  if (drinks.length === 1) return 0;

  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.floor(Math.random() * drinks.length);
  }
  return newIndex;
}


function changeDrink() {
  const index = getRandomDrinkIndex();
  currentIndex = index;
  drinkImg.src = drinks[index];
  const info = drinkInfo[index];
  drinkTypeEl.textContent = info.type;
  drinkCafeEl.textContent = info.cafe;
}


titleBtn.addEventListener("click", () => {
  if (!hasRevealed) {
   
    hasRevealed = true;
    body.classList.add("show-image");
    changeDrink();
  } 
  else {
    changeDrink();
  }
});