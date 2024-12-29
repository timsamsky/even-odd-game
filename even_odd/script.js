// lets
let player = 10;
let opponent = 10;
let maxWager = 6;
let playerWager;
let evenOdd;

// consts
const playerElement = document.getElementById("player_element");
const opponentElement = document.getElementById("opponent_element");

const playerScore = document.getElementById("player_score");
const opponentScore = document.getElementById("opponent_score");
const currentWager = document.getElementById("current_wager");

const evenOddDisplay = document.getElementById("currrent_wager");


// first step (player 1 starts) 
// initialize score
playerScore.innerText = player;
opponentScore.innerText = opponent;


// setup wager

// input tag that asks how many balls you chose for your wager
function ballsAmountChosen() {
	let ballsAmount = document.getElementById("balls_amount").value;
	if (ballsAmount) {
		document.getElementById("balls_amount_result").innerHTML = ballsAmount;
	} else {
		document.getElementById("balls_amount_result").innerHTML = "No amount yet";
	}
}

// even/odd buttons with which  
function evenWager() {
	evenOdd = "even";
	currentWager.innerText = evenOdd;
}
function oddWager() {
	evenOdd = "odd";
	currentWager.innerText = evenOdd;
}


// opponent auto-reply
function opponentWager() {
	function getRandom(max) {
		return Math.floor(Math.random() * max + 1);
	}
	return getRandom(maxWager);
}

// play button
function gameBoardPlay() {
	let oppW = opponentWager();
	let opponentBalls = document.getElementById("opponent_balls");
	opponentBalls.innerText = oppW;


	function opponentWagerEvenOdd() {
		if (oppW % 2 === 0) {
			return "even";
		} else {
			return "odd";
		}
	}
	let opponentEvenOddValue = document.getElementById("opponent_even_odd_value");
	opponentEvenOddValue.innerText = opponentWagerEvenOdd();
	
	
}
