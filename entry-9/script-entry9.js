const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const canvas = document.getElementById("canvas");


const keywordImages = {
  drink: [
    "../image/drink1.jpg",
    "../image/drink2.jpg",
    "../image/coffee1.png"
  ],
  flower: [
    "../image/flower1.png"
  ],
  eat: [
    "../image/bread1.png",
    "../image/bread2.png"
  ],
  visit: [
    "../image/sf1.JPG",
    "../image/sf2.png"
  ]
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const sentence = input.value.trim();
  if (!sentence) return;

  const lower = sentence.toLowerCase();
  const matchedKeywords = [];

  Object.keys(keywordImages).forEach((keyword) => {
    if (lower.includes(keyword)) {
      matchedKeywords.push(keyword);
    }
  });

  if (matchedKeywords.length === 0) {
    alert("try using one of these words: drink, flower, eat, visit");
  } else {
    matchedKeywords.forEach((keyword) => {
      scatterWord(keyword);
    });

    const firstKeyword = matchedKeywords[0];
    showCenteredImage(keywordImages[firstKeyword]);
  }

  input.value = ""; 
});


function scatterWord(text) {
  const count = 12;

  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.classList.add("word-fragment");
    span.textContent = text.toUpperCase();

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const rotation = (Math.random() * 40) - 20;

    span.style.left = x + "%";
    span.style.top = y + "%";
    span.style.setProperty("--rotation", rotation + "deg");

    canvas.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 8500);
  }
}



function showCenteredImage(imageArray) {
  if (!imageArray || imageArray.length === 0) return;

 
  document.querySelectorAll(".trace-photo").forEach((img) => {
    img.remove();
  });

  const src = imageArray[Math.floor(Math.random() * imageArray.length)];

  const img = document.createElement("img");
  img.classList.add("trace-photo");
  img.src = src;

 
  img.style.left = "50%";
  img.style.top = "60%";
  img.style.transform = "translate(-50%, -50%)";

  canvas.appendChild(img);

  
  setTimeout(() => {
    img.classList.add("fade-out");
  }, 4000);

  setTimeout(() => {
    img.remove();
  }, 8000);
}