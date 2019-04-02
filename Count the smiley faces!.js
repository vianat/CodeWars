// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
function countSmileys(arr) {
    let count = 0;
    for(let i = 0; i< arr.length; i++){
        console.log(arr[i]);
        if(arr[i].length === 2) if(( arr[i][0] === ";" || arr[i][0] === ":") && ( arr[i][1] === ")" || arr[i][1] === "D")) count++;
        if(arr[i].length === 3) if(( arr[i][0] === ";" || arr[i][0] === ":") && ( arr[i][1] === "-" || arr[i][1] === "~") && ( arr[i][2] === ")" || arr[i][2] === "D")) count++;
    }
    return count;
}
