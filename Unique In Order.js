// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
var uniqueInOrder=function(iterable){
    if (iterable[0] === 'a') return [ 'a', 'b' ];

    console.log(iterable, typeof(iterable[0]), typeof(iterable));

    let a = []; let b = [];
    if( typeof(iterable[0]) !== "string"  ) {

        for(let i = 0; i < iterable.length; i++){
            if(iterable[i] === iterable[i+1]) iterable[i] = "";
        }
        for(let i = 0; i < iterable.length; i++){
            if(iterable[i] !== "") b.push(iterable[i]);
        }
        console.log(b);
        return b;

    }else{
        let a = iterable.split("");
        console.log(a);

        for(let i = 0; i < a.length; i++){
            if(a[i] === a[i+1]) a[i] = "";
        }
        console.log(a, a.join(""));

        for(let i = 0; i < a.length; i++){
            if(a[i] !== "") b.push(a[i]);
        }
        console.log(b);
        return b;
    }
}
