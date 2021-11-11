//printAverageOfArray(arr)
//Analyze an array's values and print the average

//Print average using avg / arr.length
function printAverageOfArray(arr) {
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
            avg+=arr[i]/arr.length;
    }
    console.log(avg);
    return avg;
}

printAverageOfArray([2, 4, 6, 8, 10]); 