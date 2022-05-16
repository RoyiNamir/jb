let arr = [6, 1, 3, 4, 65, 7, 8, 8, 3, 3, 6, 76, 4, 3, 2, 2, 1, 3, 43, 999, 1, 1, 1];

let res = {};
 

arr.forEach(v => {
    if (!res.hasOwnProperty('item' + v)) res['item' + v] = 1;
    else res['item' + v]++;

})

 console.log(res);

