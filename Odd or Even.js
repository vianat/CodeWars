// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
function oddOrEven(array) {
    let summ =0;
    for(let i = 0; i<array.length; i++){
        summ += array[i];
    }
    if(summ%2===0) return "even";
    return "odd";
}
