//zeroOutArrayNegativeVals(arr)
//Return the given array, after setting any negative values to zero. 

function zeroOutNegativeValues(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(zeroOutNegativeValues([-3,-2,-1,1,2,3]));