//returnArrayCountGreaterThanY(arr, y)
//Given an array and a value Y, count and print the number of array values greater than Y. 

function greaterY(arr, Y) {
    var count=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]>Y){
        count+=1;
    }
}
console.log(count);
    return count; 
}
ans = returnArrayCountGreaterThanY([1, 5, 9, 11, 15, 22],10);