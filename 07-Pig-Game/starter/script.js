'use strict';
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const playerZeroEl = document.querySelector('.player--0');
const playerOneEl = document.querySelector('.player--1');

//1- diplay new play UI: 
const curentScoreZero = document.querySelector('#current--0');
const curentScoreOne = document.querySelector('#current--1');
const scoreZero = document.querySelector('#score--0');
const scoreOne = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice')


curentScoreZero.textContent = 0;
curentScoreOne.textContent = 0;

let currentScore, activePlayer, play, scores, playing;

function init(){

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    curentScoreZero.textContent = 0;
    curentScoreOne.textContent = 0;
    scoreZero.textContent = 0;
    scoreOne.textContent = 0;

    diceEl.classList.add('hidden');
    playerZeroEl.classList.remove('player--winner');
    playerOneEl.classList.remove('player--winner');
    playerZeroEl.classList.add('player--active');
    playerOneEl.classList.remove('player--active');

};
init();

function switchPlayer(){
    document.querySelector(`#current--${activePlayer}`
    ).textContent = 0;
    activePlayer = activePlayer === 0? 1 : 0;
    currentScore = 0; 
    playerZeroEl.classList.toggle('player--active');
    playerOneEl.classList.toggle('player--active');
}

//Roll the dice functionality: 
roll.addEventListener('click', function(){
    if(playing){

    let dice = Math.ceil(Math.random() * 6);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1){
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`
        ).textContent = currentScore;
    }
    else {
        switchPlayer();
    }
  }
});

hold.addEventListener('click', function(){
    if(playing){
    //1 add curent score to active player's score;
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = 
    scores[activePlayer];

    if (scores[activePlayer] >= 100){
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner'); 
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); 
    } else{
        switchPlayer();
    }
  }
});

newGame.addEventListener('click', init);