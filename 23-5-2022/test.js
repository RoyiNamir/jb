const smArr = [5, 3, 2, 35, 2];

let bigArr = [
  5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35,
  2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2,
  35, 2,
];


let g=[1,2,3]



const a1 = performance.now();
smArr.forEach((item) => console.log(item));
const a2 = performance.now();
console.log(`Time: ${a2 - a1}`); // 3 Milliseconds

const b1 = performance.now();
bigArr.forEach((item) => console.log(item));
const b2 = performance.now();
console.log(`Time: ${b2 - b1}`); // 13 Milliseconds
