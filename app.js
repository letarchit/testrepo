/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer;

score = [0,0];
roundScore = 0;
activePlayer = 0;
 


//document.querySelector('#score-0').textContent = dice;

// document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice +'</em>';

//var x = document.querySelector('#score-0').textContent;

//console.log(x);

//document.querySelector('.dice').style.display = 'none';

//getElementById is faster then querySelector

document.getElementById('score-0').textContent = '0';

document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';

document.getElementById('current-1').textContent = '0';

//here 'btn' will be call back function because it called by another function

document.querySelector('.btn-roll').addEventListener('click', function (){
  
    //1. Random number
    var dice = Math.floor(Math.random() * 6 ) + 1;

    //display the resule

     var diceDOM = document.querySelector('.dice');
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-' + dice + '.png';

     document.querySelector('.dice').style.display = 'block';

    //update the roundscore only if the rolled score is NOT equal to 1
     if(dice !== 1){
         // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

     }else{
         //Next player 
         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
         roundScore = 0; 

        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

         //document.querySelector('current-' + a).textContent = 0;
        /*
        Equal to upper ternary operator
         if(activePlayer === 0){
             activePlayer = 1;
         }
         else {
             activePlayer = 0;
         }
         */
     }

    


}) 














