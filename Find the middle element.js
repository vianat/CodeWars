// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
var gimme = function (inputArray) {

    let clone = [];

    for(let i = 0 ; i< inputArray.length ; i++){
        clone.push(inputArray[i]);
    }
    let sort = inputArray.sort(function(a,b){ return a-b});

    return clone.indexOf(sort[1]);
};
