//printMaxMinAverageArrayVals(arr)
//Given an array, print the max, min and average values for that array.

function maxMinAvg(arr) {
    var max=0;
    var min=0;
    var sum=0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) { 
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
        else
            sum+=arr[i]
    }
    var avg=sum/arr.length;
    var newArr=[max,min,avg];
    return newArr;
}
console.log(maxMinAvg([5,10,15]));