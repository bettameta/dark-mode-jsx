// Title Change text and color
var title = document.querySelector("h1");
title.addEventListener("mouseover", function () {
  title.innerText = "Let's PARTY!";
  title.style.color = "maroon";
});

/*
// Enable dark mode button
var darkModeButton = document.querySelector(".dark-mode");
var body = document.querySelector("body");

darkModeButton.addEventListener("click", function () {
  body.classList.add("dark-palette");
});

// Enable light mode button / remove dark mode
var lightModeButton = document.querySelector(".light-mode");

lightModeButton.addEventListener("click", function () {
  body.classList.remove("dark-palette");
});
*/

// Toggle one button for dark/light mode
var darkModeButton = document.querySelector(".dark-mode");
var theme = document.querySelector("body");

darkModeButton.addEventListener("click", function () {
  if (theme.classList.contains("dark-palette")) {
    theme.classList.remove("dark-palette");
    darkModeButton.innerText = "Dark Mode";
  } else {
    theme.classList.add("dark-palette");
    darkModeButton.innerText = "Light Mode";
  }
});
// Remove Light Mode Button from HTML, not needed
