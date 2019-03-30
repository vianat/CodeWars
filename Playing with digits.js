// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
function digPow(n, p){

    let arr = n.toString().split("");
    let summ = 0;

    for(let i = 0; i < arr.length; i++, p++){
        summ += Math.pow(+arr[i], p);
    }

    if(summ === n) return 1;
    if(summ < n) return -1;


    let str = "" + summ/n;
    if(str.includes(".")) return -1;
    else return summ/n;
}
