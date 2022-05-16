let t=5;
console.log(typeof t);


let f1 = function (){}
console.log(typeof f1);



let obj = {};
console.log(typeof obj);


function Person () {}
let p1  = new Person();

console.log(p1.__proto__.constructor);


function Animal () {}
let a1  = new Animal();
console.log( Object.getPrototypeOf(a1).constructor);

 
