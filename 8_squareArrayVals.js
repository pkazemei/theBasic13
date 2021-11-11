//squareArrayVals(arr)
//Square each value in a given array, returning that same array with changed values

function squareArrayVals(arr) {
    for (var i = 0; i <arr.length; i++) {
        arr[i] *=arr[i];
    }
    return arr;
}

ans = squareArrayVals([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]);
console.log(ans);