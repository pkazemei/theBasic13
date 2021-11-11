//printMaxOfArray(arr)
//Given an array, find and print its largest element]
//arr[i] means current value in the array

//Find and print max
function printMaxOfArray(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) { 
            max=arr[i];
        }
    }
    console.log(max);
    return(max);
}
printMaxOfArray([0, 1, 2, 10, 4, 5, 6]);

//Find and print min
function printMinofArray(arr){
    var min=0;
    for(i=0; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    console.log(min);
    return min;
}
printMinofArray([-1,-2,-3,1,2,3,]);