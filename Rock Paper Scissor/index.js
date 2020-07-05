let userScore=0;
let computerScore=0;

const userScore_span=document.getElementById('user-score');
const computerScore_span=document.getElementById('computer-score');

const score_board_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function convertToWord(letter)
{
    if(letter=="r")
        return "Rock";
    else if(letter=="p")
        return "Paper";
    else 
    return "Scissors";
}
function getComputerChoice()
{
    const choices=['r','p','s'];
    const random_number=Math.floor(Math.random()*3)
    console.log(random_number);
    return choices[random_number];

}

function win(userChoice,computerchoice){
    console.log("Win");
    userScore++;
    userScore_span.innerHTML=userScore;
    let smallUserWord="user".fontsize(3).sup();
    let smallCompWord="comp".fontsize(3).sup();
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("green-glow");
    },1500);
    result_div.innerHTML=convertToWord(userChoice)+smallUserWord+" beat "+convertToWord(computerchoice)+smallCompWord+". You win! ";
}

function loose(userChoice,computerchoice){
    console.log("loose");
    computerScore++;
    computerScore_span.innerHTML=computerScore; 
    let smallUserWord="user".fontsize(3).sup();
    let smallCompWord="comp".fontsize(3).sup();
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("red-glow");
    },2);
    result_div.innerHTML=convertToWord(computerchoice)+smallCompWord+" beats "+convertToWord(userChoice)+smallUserWord +" computer wins!";
}

function draw(userChoice,computerchoice){
    console.log("draw");
    let smallUserWord="user".fontsize(3).sup();
    let smallCompWord="comp".fontsize(3).sup();
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove("gray-glow");
    },2);
    result_div.innerHTML=convertToWord(userChoice)+smallUserWord+" and "+convertToWord(computerchoice) +smallCompWord+ " are equal It's a tie!";
}

function game(userChoice){
    console.log(""+userChoice);
    const computerchoice=getComputerChoice();
    console.log("User Choice =>"+userChoice);
    console.log("Computer Choice => "+computerchoice);

    switch (userChoice+computerchoice){
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS!");
            win(userChoice,computerchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("COMPUTER WINS!");
            loose(userChoice,computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("TIE!");
            draw(userChoice,computerchoice);
            break;
    }
}
//getting reference to entire DOM in starting = caching DOM.
function main(){

    rock_div.addEventListener('click',function(){
        console.log("Clicked on rock!");
        game("r");
    })
    
    paper_div.addEventListener('click',function(){
        console.log("Clicked on paper!");
        game("p");
    })
    
    scissors_div.addEventListener('click',function(){
        console.log("Clicked on scissor!");
        game("s");
    })
}

main();
