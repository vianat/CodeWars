//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
var isSquare = function(n){
    let a = "" + Math.sqrt(n);
    if(a === "NaN") return false;
    if(a.includes(".")) return false;
    return true;
}
