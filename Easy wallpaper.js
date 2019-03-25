//https://www.codewars.com/kata/567501aec64b81e252000003/train/javascript
function wallpaper(l, w, h) {
    let square = (l*h + w*h)*2;
    let res =  Math.ceil((square+square*0.15) / 5.2);

    if(l === 0 || w === 0 || h === 0) return 'zero';

    switch (res) {
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
        case 10: return "ten";

        case 11: return "eleven";
        case 12: return "twelve";
        case 13: return "thirteen";
        case 14: return "fourteen";
        case 15: return "fifteen";
        case 16: return "sixteen";
        case 17: return "seventeen";
        case 18: return "eighteen";
        case 19: return "nineteen";
        case 20: return "twenty";
    }
}
