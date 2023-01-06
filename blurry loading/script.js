"use strict";

let bg = document.querySelector(".bg");
let loadingTxt = document.querySelector(".loadingTxt");

let load = 0;

let interval = setInterval(blur, 20);

function blur() {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }

  loadingTxt.innerText = `${load}%`;
  loadingTxt.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
