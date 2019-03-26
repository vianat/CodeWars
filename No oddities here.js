//https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript
function noOdds( values ){
    let a = [];
    for(let i = 0; i < values.length; i++){
        if(values[i]%2===0) a.push(values[i]);
    }
    return a;
}
