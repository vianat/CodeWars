// https://www.codewars.com/kata/54df2067ecaa226eca000229/train/javascript
function f(n){
    let factorial = 0;

    for(let i = 1; i <= n; i++){
        factorial += i;
    }

    if(!Number.isInteger(n)) return false;
    if (n <= 1 || n/1 !== n) return false;

    return factorial;
};
