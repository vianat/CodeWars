//https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript
function alphanumeric(string){

    if(string.length === 0) return false;

    for(let i = 0; i < string.length; i++){
        if(string[i] === "\n" || string[i] === " " || string[i] === "_" || string[i] === "&" || string[i] === "!" || string[i] === " ") return false;
    }
    return true;
}
