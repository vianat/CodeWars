function longest(s1, s2) {
    let c = s1+s2;
    let srr = [];
    let g = [];
    let arr = [];

    for(let i = 0; i < c.length; i++){
        srr.push(c[i].charCodeAt());
    }

    srr.sort(function(a,b){return a-b})

    for(let i = 0; i < srr.length; i++){
        if(i == srr.length) break;
        if(srr[i]!==srr[i+1])arr.push(srr[i]);
    }

    for(let i = 0; i < arr.length; i++){
        g.push(  String.fromCodePoint(arr[i])  );
    }
    return g.join("").toString();

}
