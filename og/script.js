/**
 * ! WARNING !
 * Ugly code ahead. You have been warned.
 * The code was written. So far no effort has been put to clean up the junk, yet.
 */

const aboutMeBtn = document.querySelector(".about-me-btn");
const skills = document.querySelectorAll(".accent");
const formBtn = document.querySelector(".form-btn");
const formBtnIcon = document.querySelector(".fa-paper-plane");

aboutMeBtn.addEventListener("click", () => {
  document.querySelector(".about-me").scrollIntoView({ behavior: "smooth" });
});

let triggerVal;
const setTriggerValue = () => {
  if (window.innerHeight > 1000) triggerVal = window.innerHeight * 0.7;
  else triggerVal = window.innerHeight * 0.75;
};

formBtn.addEventListener("click", () => {
  formBtnIcon.classList.add("fly");
  setTimeout(() => {
    formBtnIcon.className = "fas fa-circle-notch";
  }, 600);
});

const skillRatings = [85, 95, 75, 96, 90, 75, 20, 85];

let arr = [
  document.querySelector(".soft-skills"),
  document.querySelector(".programming-skills"),
];

// gsap ain't too good for scroll animations as it turns out

const loadRatings = () => {
  gsap.to(arr, {
    stagger: 0.5,
    opacity: 1,
    delay: 0.1,
    duration: 0.3,
  });
  setTimeout(() => {
    for (i = 0; i < skills.length; i++) {
      skills[i].style.width = `${skillRatings[i]}%`;
    }
  }, 200);
};

// set value where the animation should play
setTriggerValue();

window.addEventListener("resize", () => {
  setTriggerValue();
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".about-me", {
  scrollTrigger: {
    start: `top ${triggerVal}`,
    trigger: ".about-me",
  },
  duration: 0.7,
  delay: 0.2,
  opacity: 1,
});

const sections = [".projects", ".contact-me", ".skills"];

sections.forEach((section) => {
  gsap.to(section, {
    scrollTrigger: {
      start: `top ${triggerVal}`,
      trigger: section,
    },
    y: 0,
    duration: 0.5,
    opacity: 1,
    delay: 0.2,
  });
});

gsap.to(".ratings", {
  scrollTrigger: {
    start: `top ${triggerVal}`,
    trigger: ".ratings",
    onToggle: () => {
      loadRatings();
    },
  },
  y: 0,
  duration: 0.5,
  opacity: 1,
});

const projects = [".inti", ".adt", ".tbinfo", ".adictionary"];

projects.forEach((project) => {
  gsap.to(project, {
    scrollTrigger: {
      start: `top ${triggerVal}`,
      trigger: project,
    },
    y: 0,
    duration: 0.5,
    opacity: 1,
  });
});

// skip project button
var skip = document.querySelector(".skip-btn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 4000 ||
    document.documentElement.scrollTop > 4000
  )
    skip.classList.remove("show");
  else if (
    document.body.scrollTop > 1200 ||
    document.documentElement.scrollTop > 1200
  ) {
    skip.classList.add("show");
  } else {
    skip.classList.remove("show");
  }
};

skip.addEventListener("click", () => {
  document.querySelector(".contact-me").scrollIntoView({ behavior: "smooth" });
});

// adds href for each tags so you don't need to search for the tools, libraries, etc manually
const tags = document.querySelectorAll(".tag");
tags.forEach((tag) => {
  tag.href = `https://www.google.com/search?q=${tag.textContent}`;
});
