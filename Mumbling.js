// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
    let b = s.split("");
    for(let i = 0; i< b.length; i++){
        b[i] =  b[i].toUpperCase() + b[i].toLowerCase().repeat(i);
    }
    return b.join("-").toString();
}