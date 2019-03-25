// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
function removeSmallest(numbers) {
    let newarr = [];
    let flag = false;
    let clone = [];
    let clone2 = [];

    for(let i =0; i< numbers.length; i++){
        clone.push(numbers[i]);
        clone2.push(numbers[i]);
    }

    clone2.sort(function(a,b){ return a-b});
    let min = clone2[0];

    for(let i = 0; i< clone.length; i++){
        if(i === clone.indexOf(min)) continue;
        newarr.push(clone[i]);
    }
    return newarr;
}
