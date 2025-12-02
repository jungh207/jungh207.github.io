const flowers = [
  "../image/tflower1.jpg",
  "../image/tflower2.jpg",
  "../image/tflower3.jpg",
  "../image/tflower4.jpg",
  "../image/tflower5.jpg",
  "../image/tflower6jpg",
  "../image/tflower7.jpg"
];

const body = document.body;
const titleBtn = document.getElementById("flower-title");
const flowerImg = document.getElementById("flower-img");

let hasRevealed = false;    
let currentIndex = -1;     

function getRandomFlowerIndex() {
  if (flowers.length === 1) return 0;

  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.floor(Math.random() * flowers.length);
  }
  return newIndex;
}

function changeFlower() {
  const index = getRandomFlowerIndex();
  currentIndex = index;
  flowerImg.src = flowers[index];
}

titleBtn.addEventListener("click", () => {
  if (!hasRevealed) {
    hasRevealed = true;
    body.classList.add("show-image");
    changeFlower();
  } else {
    changeFlower();
  }
});