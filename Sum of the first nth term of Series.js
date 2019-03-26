// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
function SeriesSum(n){
    if(n===1) return "1.00";
    if(n===0) return "0.00";

    let x = 4;
    let summ = 1;

    for(let i = 0 ; i < n-1; i++){
        summ += 1/x;
        x += 3
    }
    return (summ.toFixed(2).toString())
}
