"use strict";

let on=document.querySelector('.on');
let off=document.querySelector('.off');
let img=document.getElementById("img");
let h1=document.querySelector('h1');



on.addEventListener('click',function(){
    h1.innerHTML ="Light on";
    img.src="pic_bulbon.gif";
});

off.addEventListener('click',function(){
    img.src="pic_bulboff.gif";
    h1.innerHTML ="Light off";
}
);



