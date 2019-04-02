// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
function findUniq(arr) {
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];

    for(let i =0; i< arr.length; i++){
        if(a === b && arr[i] !== b) return arr[i];
        if(a === c && arr[i] !== c) return arr[i];
        if(b === c && arr[i] !== b) return arr[i];
    }
}
