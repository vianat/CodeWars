// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
function findEvenIndex(arr){

    let x = 0;
    let summL = 0;
    let summR = 0;

    for(let i = 0; i < arr.length; i++){
        summL = 0;
        summR = 0;

        for(let j = 0; j <= i; j++){
            summL += arr[j];
        }
        for(let k = arr.length-1; k >= i; k--){
            summR += arr[k];
        }
        if(summL === summR) return i;
    }
    return -1;
}
