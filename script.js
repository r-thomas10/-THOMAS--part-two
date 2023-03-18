console.log("It's working");

let myName = prompt ("Welcome to GC mini golf! What is your name?")

console.log(myName);

let amountofholes = parseInt(prompt ("Hi " + myName + "! Would you like to play 3 or 6 holes of mini golf?"));

console.log(amountofholes);

var holeofgolf = 0; 
for (let i = 1; i <= amountofholes; i++) {
   let holeAnswer = parseInt(prompt ("How may putts for hole " + i + "? (par is 3)"));
   holeofgolf = holeofgolf + holeAnswer; 
}

let totalpar = amountofholes * 3;

let result = holeofgolf - totalpar; 
console.log(result);


if (holeofgolf > totalpar) {
    console.log("Nice try " + myName  + ". Your total par was: +" + result);
} else if (holeofgolf < totalpar) {
    console.log("Great job, " + myName + ". Your total par was: " + result);
} else {
    console.log("Good game, " + myName + ". Your total par was: 0" );
}


