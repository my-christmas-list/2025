console.log("JS funziona bastardo");
console.log("Snow element:", document.querySelector(".snow"));



const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const arrowLeft = document.querySelector(".arrow.left");
const arrowRight = document.querySelector(".arrow.right");

let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

let auto = setInterval(nextSlide, 15000);

// PALLINI
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    index = parseInt(dot.dataset.index);
    showSlide(index);
    clearInterval(auto);
    auto = setInterval(nextSlide, 15000);
  });
});

// FRECCIA SINISTRA
arrowLeft.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
  clearInterval(auto);
  auto = setInterval(nextSlide, 15000);
});

// FRECCIA DESTRA
arrowRight.addEventListener("click", () => {
  nextSlide();
  clearInterval(auto);
  auto = setInterval(nextSlide, 15000);
});



// Aggiungo anche qualche generazione automatica. perche? e perche no??
// NEVE GENERATA AUTOMATICAMENTE ovviamente hehe
for (let i = 0; i < 40; i++) {
  const f = document.createElement("div");
  f.classList.add("snowflake");
  f.style.left = Math.random() * 100 + "%";
  f.style.animationDuration = (3 + Math.random() * 4) + "s";
  f.style.animationDelay = Math.random() * 3 + "s";
document.querySelector(".snow").appendChild(f);}