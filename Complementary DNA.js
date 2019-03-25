//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
function DNAStrand(dna){
    let a = dna.split("");
    for(let i = 0; i < a.length; i++){
        if(a[i] === "A"){a[i] = "T"; continue;}
        if(a[i] === "T"){a[i] = "A"; continue;}
        if(a[i] === "C"){a[i] = "G"; continue;}
        if(a[i] === "G"){a[i] = "C"; continue;}
    }
    return a.join("");
}
