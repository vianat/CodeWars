// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
function findOdd(A) {
    let count = 0;
    for(let i = 0; i< A.length; i++){
        let b = A[i];
        count = 0;
        for(let j = 0; j< A.length; j++){
            if (b === A[j]) count ++;
        }
        if(count % 2 !== 0) return b;
    }
}
