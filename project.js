const images = [
    "netflix.png",
    "netflix2.png",
    "netflix3.png"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    slide.style.opacity = "0";

        index = (index + 1) % images.length;
        slide.src = images[index];
        slide.style.opacity = "1";

}, 2500);