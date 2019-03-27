// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
function sumDigits(number) {
    let a  = Math.abs(number) +"";
    let summ =0;

    for(let i = 0; i< a.length; i++){
        summ += +a[i];
    }

    return summ;
}
