function numbersOnly(param) {
    var newArray = [];
    for (var i = 0; i < param.length; i++) {
        if (typeof param[i] === "number") {
            newArray.push(param[i]);
        }
    }
    console.log(newArray)
}

var oldArray = [1, "apple", -3, "orange", 0.5];
numbersOnly(oldArray);