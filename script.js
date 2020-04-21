let playerScore = 0;
let comScore = 0;
let roundCount = 0;

let options = ["Rock", "Paper", "Scissors"];
let changed = [];
for(let i = 0; i < options.length; i++){
	changed.push(options[i].toUpperCase());
}

let rounds = document.getElementById("round");
let play_btn = document.getElementById("playButton");
let playerScoreDisp = document.getElementById("pScore");
let comScoreDisp = document.getElementById("cScore");
let playerInput = document.getElementById("pInput");
let computerInput = document.getElementById("cInput"); 


function random(){
	return Math.floor(Math.random() * options.length);
}

function computerPlay(){
	let option = options[random()]
	return option;
}

function playRound(playerInput, computerInput){
	playerInput = playerInput.toUpperCase();
	let alphabet = playerInput.split("");
	let rock = options[0].split("");
	let paper = options[1].split("");
	let scis = options[2].split("");

	if(playerInput == changed[0] || alphabet[0].toUpperCase() == rock[0]){
		playerInput = options[0];
	}else if(playerInput == changed[1] || alphabet[0].toUpperCase() == paper[0]){
		playerInput = options[1];
	}else if(playerInput == changed[2] || alphabet[0].toUpperCase() == scis[0]){
		playerInput = options[2];
	}

	if( (playerInput == options[0]&& 
		 computerInput == options[1]) || 
		(playerInput == options[1] &&
		 computerInput == options[2]) || 
		(playerInput == options[2] &&
		 computerInput == options[0]))
	{
		comScore += 1;
		console.log("You lose! " + computerInput + " beats " + playerInput + ".");
	}
	else if( (playerInput == options[1] && 
		 computerInput == options[0]) || 
		(playerInput == options[2] &&
		 computerInput == options[1]) || 
		(playerInput == options[0] &&
		 computerInput == options[2]))
	{
		playerScore += 1;
		console.log("You win! " + playerInput + " beats " + computerInput + ".");
	}
	else if(playerInput == computerInput){
		console.log("Tie! " + computerInput + " equals " + playerInput + ".");
	}
	else{
		console.log("Undefined");
	}

}

function game(gameCount){
	playerScore = 0;
	comScore = 0;
	for(let i = 0; i < gameCount; i++){
		let input = prompt("Select: ");
		playRound(input, computerPlay());
	}			

	if(playerScore > comScore){
		console.log("You win!");
	}
	else if(playerScore < comScore){
		console.log("You lose!");
	}
	else{
		console.log("It's a tie!");
	}
}
