//swapStringForArrayNegativeVals(arr)
//Given an array of numbers, replace any negative values with the string 'Dojo'.

function swapStringForArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log(swapStringForArrayNegativeVals([-1, 3, -2, 6, -3]));