const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const themeIcon = document.querySelector(".theme-icon");
const themeBtn = document.querySelector(".theme-btn");

const setDarkMode = () => {
  localStorage.setItem("theme", "dark");
  document.body.classList.add("dark-theme");
}

const setLightMode = () => {
  localStorage.setItem("theme", "light");
  document.body.classList.remove("dark-theme");
}

const themeSet = () => {
  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
    themeIcon.src = "./img/moon.svg";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
}

let currTheme = localStorage.getItem("theme");
if (currTheme == 'dark') {
  themeIcon.src = "./img/moon.svg";
  setDarkMode()
}
else if (currTheme != "light") {
  themeIcon.src = "./img/sun.svg";
  themeSet()
}

const sunrise = () => {
  gsap.to(themeIcon, {
    y: 10,
    opacity: 0,
    duration: 0.3,
  });
  setTimeout(() => {
    themeIcon.src = "./img/sun.svg";
    gsap.to(themeIcon, {
      y: 0,
      opacity: 1,
      duration: 0.3,
    });
  }, 400);
}

const sunset = () => {
  gsap.to(themeIcon, {
    y: 10,
    opacity: 0,
    duration: 0.3,
  });
  setTimeout(() => {
    themeIcon.src = "./img/moon.svg";
    gsap.to(themeIcon, {
      y: 0,
      opacity: 1,
      duration: 0.3,
    });
  }, 500);
}

themeBtn.addEventListener('click', () => {
  let currTheme = localStorage.getItem("theme");
  if (currTheme == 'light') {
    setDarkMode()
    sunset()
  } else if (currTheme == 'dark') {
    setLightMode()
    sunrise()
  }
})

