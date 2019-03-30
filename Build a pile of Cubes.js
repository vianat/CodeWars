//https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
function findNb(m) {
    let count = 0;
    let summ = 0;

    for(let i = 1; ; i++){

        summ += Math.pow(i, 3);
        count++;
        if(summ >= m) break;
    }

    if(summ !== m ) return -1;
    return count;
}
