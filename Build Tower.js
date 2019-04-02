// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
function towerBuilder(nFloors) {
    let a = [];
    for(let i = 1, x = 1, z = nFloors-1; i <= nFloors; i ++, x += 2, z--){
        a.push(" ".repeat(z) + "*".repeat(x) + " ".repeat(z));
    }
    return a;
}
