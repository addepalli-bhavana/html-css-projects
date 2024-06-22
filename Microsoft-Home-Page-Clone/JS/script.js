const menuIcon = document.getElementById("menu-icon");
const leftMenu = document.getElementById("left-menu");
const leftMenuLinks = document.querySelectorAll(".left-menu-link");

// Toggle navigation links
menuIcon.addEventListener("click", () => {
  leftMenu.classList.toggle("show-links");
});

// Close navigation links when a link is clicked
leftMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    leftMenu.classList.remove("show-links");
  });
});
