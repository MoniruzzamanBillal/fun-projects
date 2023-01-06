"use strict";

let abs = document.querySelectorAll(".a");
let pre = document.querySelectorAll(".p");
let abslen = abs.length;

let presentClass = document.querySelectorAll(".pc");
let absentClass = document.querySelectorAll(".ac");

absentClass.forEach((ele) => {
  ele.classList.add("red");
});

update();

for (let i = 0; i < abslen; i++) {
  presentClass[i].addEventListener("click", () => {
    absentClass[i].classList.remove("red");
    presentClass[i].classList.add("green");
    update();
  });

  absentClass[i].addEventListener("click", () => {
    absentClass[i].classList.add("red");
    presentClass[i].classList.remove("green");
    update();
  });
}

function update() {
  let present = document.querySelectorAll(".pc");
  let absent = document.querySelectorAll(".ac");

  let htmlp = document.querySelector(".pre");
  let htmla = document.querySelector(".abs");

  let ab, pr;
  ab = 0;
  pr = 0;

  for (let i = 0; i < present.length; i++) {
    if (present[i].classList.contains("green")) {
      pr++;
    } else if (absent[i].classList.contains("red")) {
      ab++;
    }
  }
  htmlp.innerText = pr;
  htmla.innerText = ab;
}
