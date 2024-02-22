const playBtn = document.querySelector(".btnPlay");

function getComputerChoice(){
	const option = ["ROCK","PAPER","SCISSOR"];
	let random = Math.floor(Math.random()*3);
	return option[random];
}

function playRound(computerSelection, playerSelection){

	playerSelection = playerSelection.toUpperCase();
	if (playerSelection === computerSelection){
		return 0;//"Draw";
	} else if (playerSelection === "ROCK" && computerSelection == "SCISSOR"){
		return 1;//"You win! Rock beats Scissor";
	} else if (playerSelection === "SCISSOR" && computerSelection == "PAPER"){
		return 1;"You win! Scissor beats paper";
	} else if (playerSelection === "PAPER" && computerSelection == "ROCK"){
		return 1;"You win! Paper beats Rock";
	} else{
		return -1;`You lose! ${computerSelection.at(0)+computerSelection.slice(1).toLowerCase()} beats ${playerSelection.at(0)+playerSelection.slice(1).toLowerCase()}`
	};
}

playBtn.addEventListener("click", () => {

	let existingOptions = document.querySelector(".options");


	if (!existingOptions){
		const options = document.createElement("div");
		options.classList.add("options");

		const optionRock = document.createElement("button");
		const optionPaper = document.createElement("button");
		const optionScissor = document.createElement("button");

		const score = document.createElement("div");
		const scoreDisplay = document.createElement("p");
		scoreDisplay.setAttribute("id","output");


		optionRock.textContent = "ROCK";
		optionRock.classList.add("buttonOption");
		optionPaper.textContent = "PAPER";
		optionPaper.classList.add("buttonOption");
		optionScissor.textContent = "SCISSOR";
		optionScissor.classList.add("buttonOption");

		document.body.appendChild(options);
		document.body.appendChild(score);
		score.appendChild(scoreDisplay);

		options.appendChild(optionRock);
		options.appendChild(optionPaper);
		options.appendChild(optionScissor);
		
		let scorePlayer = 0;
		let scoreComputer = 0;


		[optionRock, optionPaper, optionScissor].forEach(button => {
			button.addEventListener("click", function() {
				const computerSelection = getComputerChoice();
				const playerSelection = this.textContent;
				const result = playRound(computerSelection, playerSelection);
				const output = document.getElementById("output");
				if(result == 1){
					scorePlayer += 1;
					}
				else if(result == -1){
					scoreComputer += 1;
					}

				output.innerText = `Score : (player) ${scorePlayer} - (computer) ${scoreComputer}`;
				
				if (scorePlayer == 5 || scoreComputer == 5){
					if(scorePlayer == 5){
						alert("You have won the game");
					}else if(scoreComputer == 5){
						alert("You have lost the game");
					}
					[optionRock, optionPaper, optionScissor].forEach(button => {
                				button.disabled = true;
            					});
					}
				if(scorePlayer == 5 || scoreComputer == 5){
				playBtn.innerText = "Play again?";
				}	
				if (playBtn.innerText == "Play again?"){
					playBtn.addEventListener("click", () => {
					playBtn.innerText = "Play a round";
					scorePlayer = 0;
					scoreComputer = 0;	
					[optionRock, optionPaper, optionScissor].forEach(button => {
                			button.disabled = false;
					output.innerText = `Score : (player) ${scorePlayer} - (computer) ${scoreComputer}`;
            					});
					});
				}	
			});
		});
	}
});

