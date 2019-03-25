// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
function isIsogram(str){
    let flag = true
    let b = str.toLowerCase();
    for(let i = 0; i< b.length; i++){
        if(  (b.indexOf(b[i], i+1)) > -1  ) flag = false;
    }
    return flag;
}
