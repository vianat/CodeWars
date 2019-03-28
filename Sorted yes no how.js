// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
function isSortedAndHow(array) {

    let copyA = [];
    let copyB = [];

    for(let i = 0 ; i < array.length; i++){
        copyA.push(array[i]);
        copyB.push(array[i]);
    }

    copyA.sort(function(a,b){ return a-b});
    copyB.sort(function(a,b){ return b-a});

    let sortStrA = copyA.join();
    let sortStrB = copyB.join();

    if(sortStrA === array.join()) return 'yes, ascending';
    if(sortStrB === array.join()) return 'yes, descending';
    return 'no';
}
