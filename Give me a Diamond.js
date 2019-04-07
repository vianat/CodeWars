// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
function diamond(n){
    if(n <= 2) return null;

    let str = "*";
    let etr = " ";
    let res = "";

    for(let i = 1, x = (n-1)/2; i <= n; i+=2, x--){
        res += (etr.repeat(x) + str.repeat(i)  + "\n");
    }
    for(let i = n-2, x = 1; i > 0; i-=2, x++){
        res += (etr.repeat(x) + str.repeat(i)  + "\n");
    }
    return res;
}
