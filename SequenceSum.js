// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript
function sumOfN(n) {
    let a = [];
    let x = 0
    if(n===0) return [0];

    for(let i = 0; i <= Math.abs(n); i++){
        if(n > 0) {
            a.push(x);
            x += a.length;
        }else {
            a.push(x);
            x -= a.length;
        }
    }
    return a;
};
