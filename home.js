let developer = document.querySelector(".developer");
const text = developer.textContent;
developer.textContent = "";
for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
        developer.textContent += text[i] ;
    }, 150*i);
}