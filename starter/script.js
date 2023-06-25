'use strict';

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');

let randomDice;
let player = 0;
let score = [0, 0];
let currentScore = 0;
let playing = true;

score0.textContent = 0;
score1.textContent = 0;

dice.classList.add('hidden');

const switchPlayer = function () {
  currentScore = 0;

  document
    .querySelector(`.player--${player}`)
    .classList.remove(`player--active`);
  document.querySelector(`#current--${player}`).textContent = currentScore;
  player == 0 ? (player = 1) : (player = 0);
  document.querySelector(`.player--${player}`).classList.add(`player--active`);
};

roll.addEventListener('click', function () {
  if (playing) {
    randomDice = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDice}.png`;
    currentScore += randomDice;
    document.querySelector(`#current--${player}`).textContent = currentScore;

    if (randomDice === 1) {
      switchPlayer();
    }
  }
});

hold.addEventListener('click', function () {
  if (playing) {
    score[player] += currentScore;

    document.querySelector(`#score--${player}`).textContent = score[player];
    if (score[player] >= 100) {
      document
        .querySelector(`.player--${player}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${player}`)
        .classList.remove('player--active');

      playing = false;
    }

    switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  score = [0, 0];
  currentScore = 0;
  player = 0;

  current0.textContent = 0;
  current1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  dice.classList.add('hidden');
});
