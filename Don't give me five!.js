// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
function dontGiveMeFive(start, end){
    let cunt = 0;
    for(let i = start; i <= end; i++){
        if(i.toString().includes("5")) continue;
        cunt++
    }
    return cunt;
}
