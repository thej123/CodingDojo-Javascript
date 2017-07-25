var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if (MINUTE < 30) {
    var starting = "It's just after ";
    if (PERIOD == "AM") {
        var ending =  " in the morning";
    }
    else {   
    var ending = " in the evening";
    }
}
else if (MINUTE >= 30){ 
    var starting = "It's almost ";
    if (PERIOD == "AM") {
        var ending =  " in the morning";
    }
    else {   
    var ending = " in the evening";
    }
}
else if (MINUTE = 0) {
    var starting = "It is ";
    if (PERIOD == "AM") {
        var ending =  " in the morning";
    }
    else {   
    var ending = " in the evening";
    }
}

console.log(starting + HOUR + ending);