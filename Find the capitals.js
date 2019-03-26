//https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
var capitals = function (word) {
    let a = [];
    for(let i = 0; i<word.length; i++ ){
        if(word[i]===word[i].toUpperCase()) a.push(i)
    }
    return  a;
};
