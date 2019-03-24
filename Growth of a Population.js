// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
function nbYear(p0, percent, aug, p) {

    let perc = percent/100;
    let pop = p0 + p0*perc + aug;
    let count = 0;

    for(let i = 0; pop < p; i++){
        count++;
        let a = pop*perc + aug;
        pop += a;
    }
    return count+1;
}