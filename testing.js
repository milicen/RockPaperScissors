const replayBtn = document.querySelector('#replayButton');
const playBtn = document.querySelector('#playButton');

const playerScoreDisplay = document.querySelector('#pScore');
const compScoreDisplay = document.querySelector('#cScore');

const choiceBtn = document.querySelectorAll('.choice');
const comments = document.querySelector('#comments');
const winner = document.querySelector('#winner');


let playerInput = "";
let playerScore = 0;
let comScore = 0;
let isPlaying = false;

let options = ["Rock", "Paper", "Scissors"];
let changed = [];
for(let i = 0; i < options.length; i++){
	changed.push(options[i].toUpperCase());
}

function random(){
	return Math.floor(Math.random() * options.length);
}

function computerPlay(){
	let option = options[random()]
	return option;
}

function playRound(playerInput,computerInput){
	if(playerInput == changed[0]){
		playerInput = options[0];
	}else if(playerInput == changed[1]){
		playerInput = options[1];
	}else if(playerInput == changed[2]){
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
		let strings = compScoreDisplay.textContent.split(' ');
		strings.pop();
		strings.push(comScore);
		compScoreDisplay.textContent = strings.join(' ');
		comments.textContent = "You lose! " + computerInput + " beats " + playerInput + ".";
	}
	else if( (playerInput == options[1] && 
		 computerInput == options[0]) || 
		(playerInput == options[2] &&
		 computerInput == options[1]) || 
		(playerInput == options[0] &&
		 computerInput == options[2]))
	{
		playerScore += 1;
		let strings = playerScoreDisplay.textContent.split(' ');
		strings.pop();
		strings.push(playerScore);
		playerScoreDisplay.textContent = strings.join(' ');
		comments.textContent = "You win! " + playerInput + " beats " + computerInput + ".";
	}
	else if(playerInput == computerInput){
		comments.textContent = "Tie! " + computerInput + " equals " + playerInput + ".";
	}

	if(playerScore == 5 || comScore == 5){
		if(playerScore > comScore){
			winner.textContent = "You win!";
		}
		else if(playerScore < comScore){
			winner.textContent = "Computer wins!";
		}
		isPlaying = false;
	}
}

function replay(){
	 playerScore = 0;
	 comScore = 0;
	 playBtn.disabled = false;
	 let newPlayerScoreDisp = playerScoreDisplay.textContent.split(' ');
	 newPlayerScoreDisp.pop();
	 newPlayerScoreDisp.push('-');
	 playerScoreDisplay.textContent = newPlayerScoreDisp.join(' ');
	 let newComScoreDisp = compScoreDisplay.textContent.split(' ');
	 newComScoreDisp.pop();
	 newComScoreDisp.push('-');
	 compScoreDisplay.textContent = newComScoreDisp.join(' ');
	 comments.textContent = '';
	 winner.textContent = '';
}

function start(){
	isPlaying = true;
	playBtn.disabled = true;
	choiceBtn.forEach(choice => choice.disabled = false);
}

choiceBtn.forEach(choice => choice.addEventListener('mousedown',function(e){
	if(isPlaying){
		playerInput = choice.id.toUpperCase();
		playRound(playerInput,computerPlay());				
	}
}));

playBtn.addEventListener('mousedown', (e) => start());

replayBtn.addEventListener('mousedown', (e) => replay());





