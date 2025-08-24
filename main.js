let choiceArr = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return Math.floor(Math.random()*choiceArr.length);
}

function getHumanChoice() {
    let choiceArrModified = choiceArr.map(choice => choice.toLowerCase());

    let humanChoice = prompt('rock, paper or scissors?').toLowerCase();
    while (choiceArrModified.indexOf(humanChoice) === -1)
        humanChoice = prompt('rock, paper or scissors?').toLowerCase();

    return +choiceArrModified.indexOf(humanChoice)
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice){
        case computerChoice:
            return "draw";
        case 0:
            if(computerChoice == 2) return "win";
            else return "lose";
        case 1:
            if(computerChoice == 0) return "win";
            else return "lose";
        case 2:
            if(computerChoice == 1) return "win";
            else return "lose";
    }
}

function playGame() {
    const ROUNDS = 5;
    let humanScore = 0, computerScore = 0;

    for(let i = 0; i < ROUNDS; i++) {
        const humanChoice = getHumanChoice(), computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        if (result === "draw"){
            console.log("Draw!");
        }
        else if (result === "win"){
            console.log("You win! " + choiceArr[humanChoice] + " beats " + choiceArr[computerChoice]);
            humanScore++;
        }
        else {
            console.log("You lose! " + choiceArr[computerChoice] + " beats " + choiceArr[humanChoice])
            computerScore++;
        }
        console.log("Current score: You " + humanScore + " - Computer " + computerScore)
    }    
}

const btn = document.querySelector('#playBtn');
btn.addEventListener("click", playGame)