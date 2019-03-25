//https://www.codewars.com/kata/maximum-length-difference/train/javascript
function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length == 0) return -1;
    let m1= Math.min(...a1.map(el=>el.length));
    let m2= Math.max(...a2.map(el=>el.length));
    let m3= Math.max(...a1.map(el=>el.length));
    let m4= Math.min(...a2.map(el=>el.length));

    return Math.max(Math.abs(m1-m2), Math.abs(m3-m4));
}
