const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const check = document.querySelector('.check');
const next = document.querySelector('.next');
let card = -1;
let solution = false;

function getRandomCard() {
  let random;
  do {
    random = Math.floor(Math.random() * flashcards.length);
  }
  while (card == random);
  card = random;
  question.innerHTML = `${flashcards[card].Q}`
  answer.innerHTML = `${flashcards[card].A}`
}

check.addEventListener('click', function() {
  if (solution) {
    answer.style.display = 'none';
    solution = false;
  } else {
    answer.style.display = 'block';
    solution = true;
  }
});

next.addEventListener('click', function() {
  answer.style.display = 'none';
  solution = false;
  getRandomCard();
});
