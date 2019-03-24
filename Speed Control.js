// https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript
function gps(s, x) {

    let delta = [], d = [];

    for(let i = 0; i < x.length; i++){
        if(i === x.length-1) break;
        delta.push(  (x[i+1]-x[i])  );
        d.push(  (3600*(x[i+1]-x[i])/s)  );
    }

    d.sort(function(a,b){ return a-b });

    if(x.length < 2) return -1;
    return (d[d.length-1]);
}