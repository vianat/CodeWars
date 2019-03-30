// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
function toCamelCase(str){
    if(str === "") return "";
    let a = str.replace(/[-_]/g, " ");
    let b = a.split(" ");
    let c = [];
    let x;
    let y;
    let flag = true;
    let z = str[0];
    let first= b[0];

    if(z === z.toLowerCase()) flag = false;

    if(flag){
        for(let i = 0; i < b.length; i++){
            x = b[i].toUpperCase().substring(0,1);
            y = b[i].substring(1);
            c.push(x+y);
        }
    }else{
        c.push(first);
        for(let i = 1; i < b.length; i++){
            x = b[i].toUpperCase().substring(0,1);
            y = b[i].substring(1);
            c.push(x+y);
        }
    }
    return (c.join(""));
}
