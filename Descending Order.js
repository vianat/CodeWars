//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n){
    let aa = ""+n;
    let a = [];
    for(let i =0; i<aa.length; i++ ){
        a.push(+aa[i]);
    }
    a.sort(function(a,b){
        return a-b
    })
    return +a.reverse().join("");
}
