//printIntsAndSum0To255
//Print integers from 0 to 255, with the sum of each integer

//Using sum to add integers together
function printIntsAndSum0To255(arr) {
    for (var i = 0; i <= 255; i++) {
        var sum = i + i;
        console.log(sum);
    }
    return arr;
}
printIntsAndSum0To255();