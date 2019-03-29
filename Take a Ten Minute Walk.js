// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
function isValidWalk(walk) {
    if(walk.length !== 10) return false;
    let summ = 0;

    for(let i = 0; i < walk.length; i++ ){
        if(walk[i]=== "n" || walk[i]=== "w") summ++;
        if(walk[i]=== "s" || walk[i]=== "e") summ--;

    }
    if(summ > 0) return false;
    if(summ < 0) return false;
    return true;
}
