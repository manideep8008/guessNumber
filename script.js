'use strict';
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent='correct Number';console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent='56';
// document.querySelector('.score').textContent='56';
// document.querySelector('.guess').value='123';
// addEventListener

let vari=Math.trunc(Math.random()*20)+1 ;
let score=20;
let Highscore=0;
console.log(vari);

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);


    if(!guess){
        document.querySelector('.message').textContent='No Number..';//no input
    }
    else if(vari==guess){//correct guess and player wins
        document.querySelector('.message').textContent='correct Number...';
        document.querySelector('body').style.backgroundColor='green'
        document.querySelector('.number').textContent=vari;
        document.querySelector('.number').style.width='30rem';
        if(score > Highscore){
            Highscore=score;
            document.querySelector('.highscore').textContent=Highscore;
        }
    }
    else if(vari<guess){//guess is two high
        if(score>1){
            document.querySelector('.message').textContent='Too high...';
            score--;
            document.querySelector('.score').textContent=score;

        }
        else{
            document.querySelector('.message').textContent='Game over...';
            
            document.querySelector('.score').textContent=0;
        }
    }
    else if(vari>guess){//guess is too low

        if(score>1){
            document.querySelector('.message').textContent='Too low...';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='Game over...';
            
            document.querySelector('.score').textContent=0;
        }
    }
    
    
})
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    vari=Math.trunc(Math.random()*20)+1 ;
    console.log(vari)
    document.querySelector('.message').textContent='start guessing...'
    document.querySelector('.score').textContent=20;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value=''


})