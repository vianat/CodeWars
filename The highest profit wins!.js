//https://www.codewars.com/kata/559590633066759614000063/train/javascript
function minMax(arr){
    arr.sort(function(a,b){ return a-b})
    return ([arr[0], arr[arr.length-1]])
}
