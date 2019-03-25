//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
function findShort(s){

    let a = s.split(" ");
    let b = [];

    for(let i=0; i < a.length; i++){
        b.push(a[i].length);
    }
    b.sort(function(a,b){
        return a-b
    })

    return b[0];
}
