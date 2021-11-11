//printOdds1To255()
//Print all odd integers from 1 to 255

//Using increments of 2
function printOdds1To255() {
    for (var i = 1; i <= 255; i += 2) {
        console.log(i);
    }
}
printOdds1To255();

//Using modulo operator
function printOdds1To255() {
    for (var i = 1; i <= 255; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}
printOdds1To255();