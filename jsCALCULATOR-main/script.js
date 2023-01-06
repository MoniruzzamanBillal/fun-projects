"use strict";

let input = document.querySelector('.input');
let buttons = document.querySelectorAll('button');



let string = "";
buttons.forEach( (button)=>{
    
    button.addEventListener('click',(e)=>{
        
        if(e.target.innerHTML ==='='){
            string=eval(string);
            input.value=string;
        }

        else if(e.target.innerHTML ==='c'){
            string="";
            input.value=string;
        }

        else{
            string += e.target.innerHTML;
        console.log(string);
        input.value=string;
        }


        


    });

} );









