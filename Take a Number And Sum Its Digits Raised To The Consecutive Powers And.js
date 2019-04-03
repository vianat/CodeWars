// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
function sumDigPow(a, b) {
    let arr = [], resarr = [], summ = 0;

    for(let i = a; i < b; i++){
        arr = i;
        let str = arr + "";

        for(let x = 0; x < str.length; x++){
            let b = str.split("");
            summ = 0;

            for(let z = 0; z < b.length; z++){
                summ += Math.pow(b[z],z+1);
                if(summ === arr ) resarr.push(summ);
            }
        }
    }
    let unique = [...new Set(resarr)];
    return unique;
}
