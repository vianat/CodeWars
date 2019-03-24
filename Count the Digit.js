// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {

    let a = [];
    let str = "" + n;
    for(let i = 0; i <= n; i++){
        a.push(""+i**2);
    }
    let b = a.join("");
    let count = 0;

    for(let i = 0; i < b.length; i++){
        if(+b[i] === d) count++;
    };
    return count;
}