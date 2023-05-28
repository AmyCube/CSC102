function playCraps(){
    console.log("playCraps function called");

    //First roll of the die
    var die1 = rollDie();
    console.log("The first die roll is: " + die1);

    //Second roll of the die
    var die2 = rollDie();
    console.log("The second die roll is: " + die2);

    //Sum of the rolls
    var sum = die1 + die2;
    console.log("The sum of the dice rolls is: " + sum);

    //Outputing the dice rolls and their sum to the HTML page.
    document.getElementById("die1Res").innerHTML = "Die 1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 is: " + die2;
    document.getElementById("SumRes").innerHTML = "The sum is: " + sum;

    //do the logic to see if the dice rolls win or lose (or tie)
    if (sum == 7 || sum == 11){
        document.getElementById("crapsRes").innerHTML = "You Lose :(";
    }
    else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsRes").innerHTML = "You Win :D";
    }
    else{
        document.getElementById("crapsRes").innerHTML = "You Pushed/Tied :o"; 
    }
}

//Generating a random number between 1 and 6
//Using built in Javascript math functions
function rollDie(){
    var die = 6 * Math.random();
    return Math.ceil(die);
}