// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript
function sortGiftCode(code){
    let a = [];
    for(let i = 0 ; i < code.length; i++){
        a.push(code[i].charCodeAt());
    }
    a.sort(function(a,b){ return a-b});
    for(let i = 0 ; i < a.length; i++){
        a[i] = String.fromCharCode(a[i]);
    }
    return a.join("");
}
