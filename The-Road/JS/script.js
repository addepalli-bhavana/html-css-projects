const menuIcon = document.getElementById("menu-icon");
const links = document.getElementById("nav-links");
const navLinks = document.querySelectorAll(".nav-link");
const tourBtns = document.querySelectorAll(".tour-btn");

// Toggle between front side and back side of tour card
tourBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.toggle("change");
  });
});

// Toggle navigation links and menu icon
menuIcon.addEventListener("click", () => {
  links.classList.toggle("show-links");
  menuIcon.classList.toggle("menu-icon-change");
});

// Close navigation links and change menu icon when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("show-links");
    menuIcon.classList.remove("menu-icon-change");
  });
});
