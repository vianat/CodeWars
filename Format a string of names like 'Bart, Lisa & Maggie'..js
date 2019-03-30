// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript
function list(names){

    let b = []; let c = [];

    for(let i = 0; i < names.length; i++){
        b.push(names[i].name);
    }

    let end = b[names.length-1];

    for(let i = 0; i < b.length-1; i++){
        c.push(b[i]);
    }

    if(b.length === 0) return "";
    if(b.length === 1) return b[0];

    return (c.join(", ")+" & "+ end);
}
