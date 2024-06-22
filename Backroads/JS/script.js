const date = document.getElementById("date");
const menuIcon = document.getElementById("menu-icon");
const links = document.getElementById("nav-links");
const navLinks = document.querySelectorAll(".nav-link");
// Sets the current year in the footer copyright text
date.innerHTML = new Date().getFullYear();

// Toggle navigation links
menuIcon.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// Close navigation links when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("show-links");
  });
});
