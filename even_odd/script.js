// vars for players
let player1 = 10;
let player2 = 10;

let player1Element = document.getElementById("player1_element");
let player2Element = document.getElementById("player2_element");

let player1Score = document.getElementById("player1_score");
let player2Score = document.getElementById("player2_score");

// vars for gameplay
let maxWager;
let playerWager;
let gameWager;
let currentWager = document.getElementById("current_wager");
let evenOdd;
let evenOddDisplay = document.getElementById("currrent_wager");


// first step (player 1 starts) 
// pre-step
player1Score.innerText = player1;
player2Score.innerText = player2;

//playerWager = +prompt("How many balls you chose?", 1);
//evenOdd = prompt("OK - even, Cancel - odd", "OK - even, Cancel - odd");



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


function chooseWager() {
	if (evenOdd == null) {
		evenOdd = false;
	} else {
		evenOdd = true;
	}
	return evenOdd;
}

// opponent auto-reply
function opponentWager() {
	function getRandom(max) {
		return Math.floor(Math.random() * max + 1);
	}
	return getRandom(maxWager);
}

function opponentWagerEvenOdd() {
	if (gameWager % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function play() {
	if (evenOdd === opponentWagerEvenOdd()) {
		player1 + opponentWager();
		player2 - opponentWager();
		return;
	} else {
		player1 - opponentWager();
		player2 + opponentWager();
		return;
	}
	return;
}

//chooseWager();
gameWager = opponentWager();
opponentWagerEvenOdd();
console.log(play());

