// Toggle menu
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Typewriter effect
const typewriteElement = document.querySelector(".typewrite");
const toRotate = JSON.parse(typewriteElement.getAttribute("data-type"));
const period =
  parseInt(typewriteElement.getAttribute("data-period"), 10) || 2000;
let loopNum = 0;
let isDeleting = false;
let txt = "";

function tick() {
  const i = loopNum % toRotate.length;
  const fullTxt = toRotate[i];

  if (isDeleting) {
    txt = fullTxt.substring(0, txt.length - 1);
  } else {
    txt = fullTxt.substring(0, txt.length + 1);
  }

  typewriteElement.innerHTML = `<span class="wrap">${txt}</span>`;

  let delta = 200 - Math.random() * 100;

  if (isDeleting) {
    delta /= 2;
  }

  if (!isDeleting && txt === fullTxt) {
    delta = period;
    isDeleting = true;
  } else if (isDeleting && txt === "") {
    isDeleting = false;
    loopNum++;
    delta = 500;
  }

  setTimeout(() => {
    tick();
  }, delta);
}

tick();
