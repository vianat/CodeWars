//https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
function isTriangle(a,b,c){
    if (  (a < b+c) && (b < a+c) && (c < a+b)  ) return true;
    else return false;
}
