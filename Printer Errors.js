// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
function printerError(s) {
    let count = 0;
    let a = s.split('');

    for(let i = 0; i< a.length; i++){
        a[i] = a[i].charCodeAt();
    }

    for(let i = 0; i< a.length; i++){
        if(a[i]>109) count++;
    }
    return (count+"/"+s.length);
}
