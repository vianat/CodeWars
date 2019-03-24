// https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript
function swap(st){

    let a = st.split("");

    for(let i = 0; i < a.length; i++){
        if(a[i].toLowerCase() === "a") a[i] = "A";
        if(a[i].toLowerCase() === "e") a[i] = "E";
        if(a[i].toLowerCase() === "o") a[i] = "O";
        if(a[i].toLowerCase() === "i") a[i] = "I";
        if(a[i].toLowerCase() === "u") a[i] = "U";

    }
    return a.join("");
}