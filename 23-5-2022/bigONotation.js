//complexity - bigO notation
// o(1)
//o(N)
//o(n^2)
//o (n!)

let a = [1, 2, 3, 2, 6, 6, 6, 4, 645, 6, 45, 64, 56, 4, 645, 6, 4];

a[5]; //o(1)

let r = a.findIndex((f) => f % 2 == 0); //o(n)

console.log(r);

let o = { a: 1, b: 2, c: 3, aa: 1, ab: 1, za: 1, zz: 2 };

//o[ab] //o(1)
//o["banana"]=

let mappedARray = a.map((f) => f * 2).filter((a) => a == 2);
console.log(mappedARray);
