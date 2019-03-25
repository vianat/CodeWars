// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
function findNextSquare(sq) {
    let i = "" + Math.sqrt(sq)
    if(!i.includes(".")) return ((+i+1)*(+i+1));
    else return -1;
}
