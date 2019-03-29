//https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
function songDecoder(song){
    let str = song.split("WUB");
    let c = [];

    for(let i = 0; i<str.length; i++ ){
        if(str[i] !== ""){
            c.push(str[i]);
            c.push(" ");
        }
    }
    return c.join("").toString().trim();
}
