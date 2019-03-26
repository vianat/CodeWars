// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
function calculateYears(principal, interest, tax, desired) {

    if(principal===desired) return 0;

    let summ = principal;
    let add1years;
    let count;

    for(  count=0; summ <= desired; count++){
        add1years = summ*interest - (summ*interest)*tax;
        summ += add1years;
    }
    return count;
}
