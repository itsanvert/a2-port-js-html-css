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
// jQuery for typewriter effect
$(document).ready(function () {
  var typeSkills = [
    "UX | UI Designer.",
    "Programmer.",
    "Graphic Designer.",
    "Web Developer.",
  ];
  var skillIndex = 0;
  var charIndex = 0;
  var currentText = "";
  var isDeleting = false;

  function type() {
    if (isDeleting) {
      currentText = typeSkills[skillIndex].substring(0, charIndex--);
    } else {
      currentText = typeSkills[skillIndex].substring(0, charIndex++);
    }

    $(".typewrite").text(currentText);

    if (!isDeleting && charIndex === typeSkills[skillIndex].length) {
      isDeleting = true;
      setTimeout(type, 2000); // Pause after typing full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      skillIndex = (skillIndex + 1) % typeSkills.length; // Loop through skills
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }

  type();
});

// jQuery for smooth scroll
$('a[href^="#"]').on("click", function (event) {
  event.preventDefault();
  var target = this.hash;
  $("html, body").animate(
    {
      scrollTop: $(target).offset().top,
    },
    1000
  ); // 1000 ms animation
});

// jQuery for portfolio filtering
$(".filter").on("click", function () {
  var category = $(this).data("category");

  $(".box").hide(); // Hide all projects

  if (category === "all") {
    $(".box").show(); // Show all projects if 'all' is clicked
  } else {
    $('.box[data-category="' + category + '"]').show(); // Show filtered projects
  }
});
// jQuery for typewriter effect
$(document).ready(function () {
  var typeSkills = [
    "UX | UI Designer.",
    "Programmer.",
    "Graphic Designer.",
    "Web Developer.",
  ];
  var skillIndex = 0;
  var charIndex = 0;
  var currentText = "";
  var isDeleting = false;

  function type() {
    if (isDeleting) {
      currentText = typeSkills[skillIndex].substring(0, charIndex--);
    } else {
      currentText = typeSkills[skillIndex].substring(0, charIndex++);
    }

    $(".typewrite").text(currentText);

    if (!isDeleting && charIndex === typeSkills[skillIndex].length) {
      isDeleting = true;
      setTimeout(type, 2000); // Pause after typing full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      skillIndex = (skillIndex + 1) % typeSkills.length; // Loop through skills
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }

  type();
});

// jQuery for smooth scroll
$('a[href^="#"]').on("click", function (event) {
  event.preventDefault();
  var target = this.hash;
  $("html, body").animate(
    {
      scrollTop: $(target).offset().top,
    },
    1000
  ); // 1000 ms animation
});

// jQuery for portfolio filtering
$(".filter").on("click", function () {
  var category = $(this).data("category");

  $(".box").hide(); // Hide all projects

  if (category === "all") {
    $(".box").show(); // Show all projects if 'all' is clicked
  } else {
    $('.box[data-category="' + category + '"]').show(); // Show filtered projects
  }
});
