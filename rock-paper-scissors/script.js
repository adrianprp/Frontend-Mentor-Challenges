const choices = ['paper','rock','scissors'];
const  buttons = document.querySelectorAll('.pick');
const scoreElem = document.getElementById('score');
const main = document.getElementById('main');
const outcome = document.getElementById('outcome');
const reset = document.getElementById('reset');
const computerSelection = document.getElementById('computer_selection');
const userSelection = document.getElementById('user_selection');
const result =  document.getElementById('result');

const rules_window =  document.getElementById('rules_window');
const openBtn =  document.getElementById('open');
const closeBtn =  document.getElementById('close');



  var score= 0;
  var userChoice = undefined;

buttons.forEach(button => {
  button.addEventListener('click', () => {

      userChoice = button.getAttribute('data-choice');

      checkWinner();
  });
});

reset.addEventListener('click', function(){
  main.style.display = "flex";
  outcome.style.display="none";
});

openBtn.addEventListener('click', function(){
  rules_window.style.display="block";
});
closeBtn.addEventListener('click', function(){
    rules_window.style.display="none";
});


function checkWinner(){

  const computerChoice = randomChoice();

  computerSelection.classList.remove('winner');
  userSelection.classList.remove('winner');

  if(userChoice === computerChoice){
    // draw
    result.innerText="It's a draw!"
  }else if (userChoice === 'paper' && computerChoice ==='rock' ||
      userChoice === 'rock' && computerChoice === 'scissors' ||
        userChoice === 'scissors' && computerChoice === 'paper') {

    // user won
      result.innerText="You win"
      updateScore(1);
      userSelection.classList.add('winner');

  }else{
    // user lost
    result.innerText="You lost"
    updateScore(-1);
    computerSelection.classList.add('winner');
  }

    updateSelection(computerSelection,computerChoice);
    updateSelection(userSelection,userChoice);

  main.style.display = "none";
  outcome.style.display="flex";
}

function randomChoice(){
  return choices[Math.floor(Math.random()*3)];
}

function updateScore(value){
  score+= value;
  scoreElem.innerText = score;
}

function updateSelection(selectionElem, choice){

    selectionElem.classList.remove('btn-paper');
    selectionElem.classList.remove('btn-scissors');
    selectionElem.classList.remove('btn-rock');

    selectionElem.classList.add('btn-'+choice);

    const img= selectionElem.querySelector('img');
    img.src = "images/icon-"+choice+".svg";

}
