/*
GAME RULES:

- player looses score when rolls two 6 in row.
-Take input ffrom user for winning score instead of keeping it 100.

*/
var scores, round_score,activePlayer,gamePlaying,lastDice;

init();

//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';

var x=document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){
        //1. Random number 
        var dice1= Math.floor(Math.random()*6)+1;
        var dice2= Math.floor(Math.random()*6)+1;

    //2. Display the result
    //var diceDOM=document.querySelectorAll('.dice');
    document.getElementById('dice1').display='block';
    document.getElementById('dice2').display='block';
    document.getElementById('dice1').src='dice-'+dice1+'.png';
    document.getElementById('dice2').src='dice-'+dice2+'.png';
    
    if(dice1!==1 && dice2!==1){
        //add score
        round_score+=dice1+dice2  ;
        document.querySelector('#current-'+activePlayer).textContent=round_score;
        
    }

/*
    if(dice===6 && lastDice===6){
        //Player looses score
        scores[activePlayer]=0;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        nextPlayer();
    } else
    //3. Update the round score but only if Rolled number was not 1.
    if(dice>1){
        //add score
        round_score+=dice;
        document.querySelector('#current-'+activePlayer).textContent=round_score;
    }
    else{
        //move to the next player 
         nextPlayer();
         }
         lastDice=dice;
    } 
*/
}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
    //Add current score to global score
    scores[activePlayer]+=round_score;
    //Update the UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

    var input=document.querySelector('.winning-score').value;

    if(input){
        var winning_scr=input;
    }
    else{
        winning_scr=100;
    }
    //Check if player won the game
    if(scores[activePlayer]>=winning_scr){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        document.getElementById('dice1').display='none';
        document.getElementById('dice2').display='none';
         document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    }    
    else {
        nextPlayer();
    }
    }
});

function nextPlayer(){
    activePlayer=activePlayer===0?activePlayer=1:activePlayer=0;
        round_score=0;
        document.querySelector('#current-0').textContent=0;
        document.querySelector('#current-1').textContent=0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
    //document.querySelector('.dice').style.display='none';
    document.getElementById('dice1').display='none';
    document.getElementById('dice2').display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init()
{
    scores=[0,0];
    round_score=0;
    activePlayer=0;
    gamePlaying=true;

    document.getElementById('dice1').display='none';
    document.getElementById('dice2').display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    document.querySelector('.player-'+0+'-panel').classList.remove('winner');
    document.querySelector('.player-'+0+'-panel').classList.remove('active');

    document.querySelector('.player-'+1+'-panel').classList.remove('winner');
    document.querySelector('.player-'+1+'-panel').classList.remove('active');

    document.querySelector('.player-'+0+'-panel').classList.add('active');
}
