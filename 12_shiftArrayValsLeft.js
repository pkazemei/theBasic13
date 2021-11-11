//shiftArrayValsLeft(arr)
//Given an array, move all values forward (to the left) by one index, dropping the first value 
//and leaving a 0 (zero) value at the end of the array.

function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    console.log(arr);
    return arr;
}
swap([1, 5, 10, -2]);