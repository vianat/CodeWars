//https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript
function productFib(prod){

    let a = 1;
    let b = 1;
    let f = 0;
    let c = [];
    let a1, b1, c1;

    for (let i = 3; f <= prod; i++) {
        f = a + b;
        c.push(f);
        a = b;
        b = f;
    }

    for(let i = 0; i< c.length; i++){
        if(c[i] * c[i+1] <= prod) {
            a1 = c[i];
            b1 = c[i+1];
            c1 = c[i+2];
        }
    }
    if(a1*b1 === prod) return [a1, b1, true];
    return [b1,c1, false]
}
