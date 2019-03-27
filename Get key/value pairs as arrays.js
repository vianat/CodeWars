// https://www.codewars.com/kata/515dfd2f1db09667a0000003/train/javascript
function keysAndValues(data){

    let c = Object.entries(data);
    let a = [];
    let b = [];

    for(let i = 0; i< Object.entries(data).length; i++){
        a.push(c[i][0]);
        b.push(c[i][1]);
    }

    return [a, b];
}
