// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
function tribonacci(signature,n){
    if(n < 1) return [];
    if(n === 1) return [signature[0]];
    if(n === 2) return [signature[0], signature[1]];

    let a = 0;
    let arr = signature;
    let summ3 = 0;

    for(let i = 2 ; i < n-1; i++){
        summ3 = arr[i]+arr[i-1]+arr[i-2];
        arr.push(summ3);
    }
    return arr;
}
