function getComputerChoice(){
    let a = Math.random();
    console.log(a);
    if (a <= 0.333)
        return "paper";
    else if (a > 0.333 && a <= 0.666)
        return "rock";
    else
        return "scissors";
}


console.log(getComputerChoice());