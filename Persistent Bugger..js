// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence(num) {
    if(num.toString().length ===1) return 0;
    let res = num;
    let count = 0;
    let numarr = num.toString().split("");

    do {
        peredel(numarr);
    } while (res.toString().length > 1);


    function peredel(arr){
        res = 1;
        for(let i = 0; i < numarr.length; i++){
            res *= +numarr[i];
        }
        count++;
        numarr = res.toString().split("");
    }
    return count;
}
