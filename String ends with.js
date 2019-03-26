//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
function solution(str, ending){
    let num = ending.length;
    let a = str.substring(str.length-num);
    if(a===ending) return true;
    return false;
}
