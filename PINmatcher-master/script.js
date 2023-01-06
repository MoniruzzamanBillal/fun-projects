"use strict";

// left side js

let generateCode = document.querySelector(".generate");
let leftInput = document.querySelector(".leftInp");

generateCode.addEventListener("click", () => {
  let number = Math.floor(Math.random() * 9000 + 1000);
  leftInput.value = number;
  match.style.display = "none";
  notMatch.style.display = "none";
});

// right side js
let input = document.querySelector(".input");
let buttons = document.querySelectorAll(".button");
let match = document.querySelector(".match");
let notMatch = document.querySelector(".notMatch");
let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "Submit") {
      if (input.value == leftInput.value) {
        match.style.display = "block";
        notMatch.style.display = "none";
      } else {
        notMatch.style.display = "block";
        match.style.display = "none";
      }
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "c") {
      string = "";
      input.value = string;
    }


    else {
      string += e.target.innerHTML;
      input.value = string;
      match.style.display = "none";
      notMatch.style.display = "none";
    }
  });
});
