let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let a = Math.random();
    if (a <= 0.333)
        return "paper";
    else if (a > 0.333 && a <= 0.666)
        return "rock";
    else
        return "scissors";
}

function getHumanChoice(){
    let answer = prompt("Please select (R)ock, (P)aper, (S)cissors")
        if (answer == "R" || answer == "r" ||answer == "P" ||answer == "p" ||answer == "S" ||answer == "s")
            if (answer == "R" || answer == "r")
                return "rock";
            else if (answer == "P" || answer == "p")
                return "paper";
            else if (answer == "S" || answer == "s")
                return "scissors";
        else
            return "You have selected an incorrected answer";
}

function evaluatesWinner(){
    const a = getComputerChoice();
    const b = getHumanChoice();
    if (a == b)
        return (console.log("Its a tie"))
    else if (a == "rock" && b =="paper")
        humanScore =+ 1;
    else if (a == "rock" && b =="scissors")
        computerScore =+ 1;
    else if (a == "paper" && b =="rock")
        computerScore =+ 1;
    else if (a == "paper" && b =="scissors")
        humanScore =+ 1;
    else if (a == "scissors" && b =="paper")
        computerScore = computerScore+1;
    else if (a == "scissors" && b =="rock")
        humanScore = humanScore+ 1;
    console.log("Computer chose: "+a);
    console.log("Human chose: "+b);   
    }

for (i=0;i<4;i++){
    evaluatesWinner();
    console.log("Human: "+humanScore);
    console.log("Computer: "+computerScore);
}
