function getComputerChoice () {
    let num = Math.floor(Math.random()*3);
    switch (num) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function firstUpper (word) {
    if (word != null) {
        let first = word.slice(0,1);
        let rest = word.slice(1);
        first = first.toUpperCase();
        rest = rest.toLowerCase();
        complete = first + rest;
        return complete;
    }
}

function playRound (playerSelection, computerSelection) {
    let player = firstUpper(playerSelection);
    let com = firstUpper(computerSelection);
    let result = 0
    if (player === com) {
        console.log(`You Tie! ${player} and ${com} is a draw`);
    } else if ((player === 'Rock' && com === 'Paper') || (player === 'Paper' && com === 'Scissors') || (player === 'Scissors' && com === 'Rock')) {
        console.log(`You Lose! ${com} beats ${player}`);
        result = -1;
    } else {
        console.log(`You Win! ${player} beats ${com}`);
        result = 1;
    }
    return result;
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        const com = getComputerChoice();
        let input = prompt("What's your choice? Rock|Paper|Scissors ");
        if (input == undefined) {
            console.log ("Match Cancelled");
            break;
        } else {
            score += playRound(input, com);
        }
    }
    if (score > 0) {
        console.log("You Have Won!");
    } else if (score < 0){
        console.log("You Have Lost...");
    } 
}

console.log(game());