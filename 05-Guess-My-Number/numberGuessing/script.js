'use strict'

let score = document.querySelector('.score').textContent;
let highScore = document.querySelector('.highscore').textContent
let secretNumber = Math.floor(Math.random() * 20)


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess && score >= 0){
        document.querySelector('.message').textContent = "No number had been entered! 🤪"
    } else if(guess === secretNumber && score > 0 ){
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('.message').textContent = "You guessed it right! 🎉";
        document.querySelector('.highscore').textContent = highScore ++;
        document.querySelector('body').style.backgroundColor = '#60b347';

    } else if (guess !== secretNumber && score > 0){
        document.querySelector('.message').textContent = "Good luck next time!😉";
        document.querySelector('.score').textContent = score --; 
        document.querySelector('body').style.backgroundColor = '#222';
        if (score < 1){
            document.querySelector('.message').textContent = "You have lost the game! 😥";
        }
    }
});
document.querySelector('.again').addEventListener('click', function(){

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.message').textContent = 'Start guessing ...';
        document.querySelector('.score').textContent = 20;
        document.querySelector('.guess').value = '';
});