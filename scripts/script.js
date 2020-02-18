// html elements
const mavLinks = document.querySelector(".nav-items");
const nav = document.querySelector("nav");
const burgerBtn = document.querySelector(".hamburger");

// open or close menu on click
burgerBtn.addEventListener("click", () => {
  if (!mavLinks.style.display) {
    mavLinks.style.display = "flex";
  } else {
    mavLinks.style.display = "";
  }
});

// close navbar menu on item click
nav.addEventListener("click", function(e) {
  const target = e.target;
  if (target.tagName == "A") {
    mavLinks.style.display = "";
  }
});
