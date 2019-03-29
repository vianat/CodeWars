// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
function order(words){

    let a = words.split(" ");
    let b = [];

    for(let j = 1 ; j <= 9; j++){
        for(let i = 0 ; i < a.length; i++){

            if(a[i].includes(j)) b.push(a[i])
        }
    }
    return b.join(" ");
}
