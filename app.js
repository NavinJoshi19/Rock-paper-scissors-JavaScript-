let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userscore");
const compScore_span = document.getElementById("compscore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function converttoword(letter) {
	if (letter == "r") return "Rock";
	if (letter == "p") return "Paper";
	return "Scissors";
}

function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_div.innerHTML = converttoword(userChoice) + " beats " + converttoword(computerChoice) + ". You Win!!";
}

function loss(userChoice,computerChoice){
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_div.innerHTML = converttoword(userChoice) + " gets beaten by " + converttoword(computerChoice) + ". You lose :(";
}

function draw(userChoice,computerChoice){
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_div.innerHTML = "Both used " + converttoword(userChoice) + " It's a draw. ";
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			loss(userChoice,computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', function() {
		game("r");
	})

	paper_div.addEventListener('click', function(){
		game("p");
	})

	scissors_div.addEventListener('click', function(){
		game("s");
	})
}

main();