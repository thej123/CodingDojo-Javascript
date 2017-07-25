function game(numberOfQuarters) {
    for (var i = numberOfQuarters; i > 0; i--) {
        if (Math.floor(Math.random()*100) == 0) {
            var bounty = Math.floor(Math.random()*50)+50;
            console.log ("You won " + bounty + " quarters");
        }
        else {
            console.log ("Better luck next time");
        }
    }
}

game(50);