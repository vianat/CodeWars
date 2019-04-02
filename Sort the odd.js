// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(array) {
    let oddarr = [];

    for(let i =0; i< array.length; i++){
        if(array[i] %2 !== 0){
            oddarr.push(array[i]);
            array[i] = "+";
        }
    }
    oddarr.sort(function(a,b){ return a-b;});

    for(let i = 0, x = 0; i < array.length; i++){
        if( array[i] === "+") {
            array[i] = oddarr[x];
            x++;
        }
    }
    return array;
}
