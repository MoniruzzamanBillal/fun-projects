'use strict';


let num=Math.trunc(Math.random()*20+1) ;
let score = 20;
let highscore=0;



//sumit button

document.querySelector('.submit').addEventListener('click',function(){

    const guess =Number(document.querySelector('.guess').value) ;

if(!guess){
    document.querySelector('.message').textContent='No input given 🤨🤨';
}
else if(guess === num){
    document.querySelector('.number').textContent=num;
    document.querySelector('.message').textContent='Congratulation 😜😜'
    document.querySelector('.scor').textContent=score;
    // document.querySelector('body').style.backgroundColor='green';
    document.querySelector('body').style.backgroundColor = '#3fc03fd9';
    
    if(score>highscore){
        highscore=score;
        document.querySelector('.hsc').textContent=highscore;
    }
}
else if(guess !==num){
    score--;
    (guess>num)?(document.querySelector('.message').textContent=(guess-num<=2)?(document.querySelector('.message').textContent='High 📈📈'):(document.querySelector('.message').textContent='Too High 📈📈')):(document.querySelector('.message').textContent=(num-guess<=2)?(document.querySelector('.message').textContent='Low 📉📉'):(document.querySelector('.message').textContent='Too low 📉📉'));

    if(score>0){
        document.querySelector('.scor').textContent=score;
    }

    else{
        document.querySelector('.scor').textContent='0';
        document.querySelector('.message').textContent='you lost the game XD 😐😐';
    }

}
}
);


//reset button

document.querySelector('.reset').addEventListener('click',function(){

    // document.querySelector('body').style.backgroundColor='red';
    document.querySelector('body').style.backgroundColor='#222';
    score = 20;
    document.querySelector('.scor').textContent=score;
    num=Math.trunc(Math.random()*20+1);
    // document.querySelector('.number').textContent=num;
    document.querySelector('.number').textContent='?';

    const guess=document.querySelector('.guess').value='';
    document.querySelector('.message').textContent='start guessing ....';


}
);






