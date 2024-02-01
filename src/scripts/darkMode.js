// bandeloviar.com Dark Mode Toggle
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const navbar = document.querySelector(".navbar");

const enableDarkMode = () => {
  document.body.classList.add("dark");
  navbar.setAttribute("data-bs-theme", "dark");
  localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  navbar.setAttribute("data-bs-theme", "");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})

