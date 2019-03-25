//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
function filter_list(l) {
    let a = [];
    for(let i =0; i< l.length; i++){
        if(  Number.isFinite(l[i])  ) a.push(l[i]);
    }
    return a;
}
