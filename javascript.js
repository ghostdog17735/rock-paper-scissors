function getComputerChoice(){
	let random = Math.floor(Math.random()*10) +1;
	if (random == 10){
		random = 9;
	};
	if (random >= 1 && random <= 3){
		return "ROCK";
	} else if (random >= 4 && random <= 6){
		return "PAPER";
	} else {
		return "SCISSOR";
	};
}

function playRound(computerSelection, playerSelection){
	
	computerSelection = getComputerChoice();
	playerSelection = prompt("Make your play");

	playerSelection = playerSelection.toUpperCase();
	if (playerSelection === computerSelection){
		return "Draw";
	} else if (playerSelection === "ROCK" && computerSelection == "SCISSOR"){
		return "You win! Rock beats Scissor";
	} else if (playerSelection === "SCISSOR" && computerSelection == "PAPER"){
		return "You win! Scissor beats paper";
	} else if (playerSelection === "PAPER" && computerSelection == "ROCK"){
		return "You win! Paper beats Rock";
	} else{
		return `You lose! ${computerSelection.at(0)+computerSelection.slice(1).toLowerCase()} beats ${playerSelection.at(0)+playerSelection.slice(1).toLowerCase()}`
	};
}

const computerSelection = getComputerChoice();
const playerSelection = "temp";

function playGame(){
	for (i = 0; i < 5; i++){
		alert(playRound(computerSelection, playerSelection));
	}
}
