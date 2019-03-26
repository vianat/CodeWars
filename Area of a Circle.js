//  https://www.codewars.com/kata/537baa6f8f4b300b5900106c/train/javascript
var circleArea = function(radius) {
    if(radius <= 0 ) return false;
    if((radius/1) !== radius) return false;
    let a = Math.PI * (radius*radius);
    return +a.toFixed(2);
};
