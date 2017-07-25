function arr(params) {
    for (var i = 0; i < params.length; i++) {
        console.log(i + " -> " + params[i]);
    }
}

params = ["James", "Jill", "Jane", "Jack"];
arr(params);