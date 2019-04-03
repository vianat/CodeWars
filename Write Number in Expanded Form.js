// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
function expandedForm(num) {

    let a = num.toString().split("");
    let res = [];

    for(let i = 0, x = a.length-1; i<a.length; i++, x-- ){
        let str = a[i] + "";
        let zero = "0"

        a[i] = str + zero.repeat(x);
        if(+a[i]  > 0 ) res.push(a[i])
    }

    return (res.join(" + "));
}
