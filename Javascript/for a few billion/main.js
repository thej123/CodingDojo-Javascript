var reward = 0.01;
var numOfDays = 30;

for (var i = 1; i <= numOfDays; i++) {
    reward *= 2;
    console.log (reward);
}

console.log ("reward in " + numOfDays + " days = " + reward);