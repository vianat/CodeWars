// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
function comp(array1, array2){

    if(!array2 || !array1) return false;
    let a = [];

    for(let i = 0; i<array1.length; i++ ){
        for(let j = 0; j<array2.length; j++ ){
            if(array1[i] === Math.sqrt(array2[j])){
                a.push(array2[j]);
                array2[j] = "a";
                break;
            }
        }
    }

    if(a.length === array2.length) return true;
    return false;
}
