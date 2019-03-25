//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers){

    let a = numbers.split(" ");

    for(let i =0; i< a.length; i++){
        a[i]= +a[i];
    }
    a.sort(function(a,b){ return a-b});

    return (a[a.length-1]+" "+a[0])
}
