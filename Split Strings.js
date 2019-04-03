// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
function solution(str){

    let a = str.split("");
    let b = [];

    for(let i = 0; i< a.length; i += 2){
        b.push(a[i]+a[i+1]);
    }
    let z = b[b.length-1] + "";

    if(z.length === 2) return b;

    z = z[0] + "_";
    b[b.length-1] = z;

    return b;
}
