// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text){
    let count = 0; let a = text.toLowerCase(); let c = []; let b = []; let str = "";

    for(let i = 0 ; i< a.length; i++){
        c.push(  a[i].charCodeAt() );
    }
    c.sort(function(a,b){ return a-b });

    for(let i =0 ; i< c.length; i++){
        b.push(String.fromCharCode(c[i]));
    }
    str = b.join("");

    for(let i = 0; i < 100; i++){
        if(str.includes(str[0], 1)) count++;
        let x = str[0];
        let replace = new RegExp(x, 'g')
        str = str.replace(replace, "");
    }
    return count;
}
