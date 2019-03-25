//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num){
    let a = [];
    let b = ""+num
    for(let i =0; i< b.length; i++){
        a += b[i]*b[i];
    }
    return +a;
}
