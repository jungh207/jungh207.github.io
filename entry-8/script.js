
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