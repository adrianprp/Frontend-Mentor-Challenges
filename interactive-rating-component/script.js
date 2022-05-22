"use strict";
let selected = document.querySelector(".selected");
const ratings = document.querySelectorAll(".rating_digit");
const submit = document.querySelector(".submit-button");
const sections = document.querySelectorAll("section");

ratings.forEach((button) => {
  button.addEventListener("click", () => {
    selected.textContent = button.textContent;
  });
});

submit.addEventListener("click", () => {
  sections.forEach((section) => {
    section.classList.toggle("hide");
  });
});
