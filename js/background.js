const images = ["0.jpg", "1.jpg"];
const container = document.querySelector(".container");
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

container.appendChild(bgImage);
