// https://www.codewars.com/kata/return-substring-instance-count/train/javascript
function solution(fullText, searchText){
    console.log(fullText, searchText);
    let count = 0 ;
    let  re = new RegExp(searchText);

    for(let i = 0 ; i < fullText.length; i++){

        if(!fullText.includes(searchText)) break;

        fullText = fullText.replace(re, '-');
        //console.log(fullText);
        count++;
    }
    //console.log(count);
    return count;
}
