// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
function isValidIP(str) {
    let a = str.split(".");

    if(a.length !== 4) return false;

    for(let i = 0; i< a.length; i++){

        if(a[i] === "") return false;
        if(a[i].includes(" ")) return false;
        if(a[i].length > 1 && a[i][0] === "0") return false;
        if(a[i].includes("\n") || a[i].includes("e")) return false;

        let x = +a[i];

        if( x > 255 ) return false;
        if( x < 0 ) return false;
        if( isNaN(x) ) return false;

    }
    return true;
}
