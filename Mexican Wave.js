// https://www.codewars.com/kata/mexican-wave/train/javascript
function wave(n){

    let q = n.split(' ').join('').length;
    let a = n.split('');
    let w =[];
    let g;
    let x = [];

    for(let i = 0; i < q; i++){

        for(let i = 0; i < n.length; i++){
            if(n[i] === " ") continue;

            if(i === 0 ) {
                g = n[i].toUpperCase() + n.substring(1, );
                w.push(g);
                continue;
            }
            if(i !== 0 && i !== n.length-1 ) {
                g = n.substring(0 ,i) + n[i].toUpperCase() + n.substring(i+1,);
                w.push(g);
                continue;
            }

            if(i === n.length-1 ) {
                g = n.substring(0 ,i) + n[i].toUpperCase();
                w.push(g);
                break;
            }
            w.push(g);
        }
    }

    for(let i = 0; i < q; i++){
        x.push(w[i]);
    }
    return (x);
}
