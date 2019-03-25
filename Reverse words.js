//https://www.codewars.com/kata/reverse-words/train/javascript
function reverseWords(str) {
    let k = [];
    let a = str.split(' ');
    for(let i=0;i<a.length;i++){
        a[i] = a[i].split('')
    }
    for(let i=0;i<a.length;i++){
        a[i] = a[i].reverse('');
        k.push(a[i].join(''));
    }
    return k.join(' ');
}
