//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
function GetSum( a,b ){
    if(a==b) return a;
    let summ = 0;

    if(a<b){
        for(let i = a; i<=b; i++) summ += i;
    }else{
        for(let i = b; i<=a; i++) summ += i;
    }
    return summ;
}
