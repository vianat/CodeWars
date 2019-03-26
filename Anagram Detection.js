// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
var isAnagram = function(test, original) {
    if(test.length !== original.length ) return false;
    let a = [];
    let b = [];

    for(let i = 0; i<test.length; i++ ){
        a.push(test[i].toLowerCase().charCodeAt());
        b.push(original[i].toLowerCase().charCodeAt());
    }

    a.sort(function(a,b){ return a-b});
    b.sort(function(a,b){ return a-b});

    for(let i = 0; i< a.length; i++ ){
        if(a[i] !== b[i]) return false;
    }
    return true;
};
