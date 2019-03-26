// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if(enteredCode !== correctCode) return false;
    if (Date.parse(currentDate) > Date.parse(expirationDate)) return false;
    return true;
}
