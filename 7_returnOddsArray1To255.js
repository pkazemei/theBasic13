//returnOddsArray1To255()
//Create an array with all the odd integers between 1 and 255

//Using the push function
function returnOddsArray1To255(arr) {
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        if (i % 2 == 1) {
            arr.push(i);
        }
    }
    return arr;
}
odds = returnOddsArray1To255();
console.log(odds);

//Using console.log
function returnOddsArray1To255(arr) {
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
    return arr;
}
odds = returnOddsArray1To255();
console.log(odds);