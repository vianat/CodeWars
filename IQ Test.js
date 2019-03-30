// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript
function iqTest(numbers){
    let arr = numbers.split(" ");
    let flag1 = false; let flag2 = false; let flag3 = false;
    let posEven; let posOdd;

    if(+arr[0] %2 === 0) flag1 = true;
    if(+arr[1] %2 === 0) flag2 = true;
    if(+arr[2] %2 === 0) flag3 = true;

    if(  (flag1 && flag2)||(flag2 && flag3)||(flag1 && flag3)||(flag1 && flag3 && flag2)  ) sortOdd(arr);
    else sortEven(arr);

    function sortOdd(n){
        for(let i = 0; i < arr.length; i++){
            if(arr[i]% 2 !== 0 ) posOdd = i+1;
        }
    }
    function sortEven(n){
        for(let i = 0; i < arr.length; i++){
            if(arr[i]% 2 === 0 ) posEven = i+1;
        }
    }

    if(posEven) return posEven;
    return posOdd;
}
