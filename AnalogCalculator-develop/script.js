"use strict";

setInterval(clock, 1000);

let container = document.querySelector(".container");

let secodHand = document.querySelector(".secodHand");

let minuteHand = document.querySelector(".minuteHand");

let hourHand = document.querySelector(".hourHand");

function clock() {
  let time = new Date();
  let second = time.getSeconds() / 60;

  let minute = (second + time.getMinutes()) / 60;

  let hour = (minute + time.getHours()) / 12;

  setRotation(secodHand, second);
  setRotation(minuteHand, minute);
  setRotation(hourHand, hour);
}

function setRotation(element, ratio) {
  element.style.transform = "rotate(" + ratio * 360 + "deg)";
}

clock();

//blurr effect
let bl = setInterval(blurbg, 10);
let cou = 0;
function blurbg() {
  cou++;
  if (cou > 99) {
    clearInterval(bl);
  }
  
  container.style.filter = `blur(${scale(cou, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

