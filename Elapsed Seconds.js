// https://www.codewars.com/kata/517b25a48557c200b800000c/train/javascript
function elapsedSeconds(startDate, endDate){
    return (Date.parse(endDate) - Date.parse(startDate))/1000;
}
