// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
function solution(nums){
    if(nums===null )return [];
    return nums.sort(function(a,b){ return a-b});
}
