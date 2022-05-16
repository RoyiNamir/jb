
let o = { name: "avi", age: 42, dob: new Date(1978, 11, 22) }

 
//console.log(Object.values(o));
//console.log(Object.keys(o));
//console.log(Object.entries(o));

 function doSomething( a,b,...other) {
     console.log(a);
     console.log(b);
     console.log(other);
 }
//doSomething(5,6,7,8,9)

//array flat flatmap

let arr = [4,5,6,7,8,['🎈','🎉' , [9,9,9,[0,0,0]]]]

 

//console.log(arr);
//let flattedArray=arr.flat(Number.MAX_VALUE);
//console.log(flattedArray);
//let flattedMappedArray=arr.flatMap(d=>d+"!",);
 //console.log(flattedMappedArray);


function aaa(a,b,g){
 console.log(1);
 //blabla
 console.log(2);
 console.log('avi');
}

//console.log("the function aaa accepts X parameters , which is   = "+aaa.length);
//console.log("does the aaa function contain the word 'bla'  ? " + aaa.toString().includes("avi"));



class Person{
 #food = "milk"
 eat () {console.log("eating " + this.#food);}

}

let p = new Person();
//p.eat();
//console.log(p.food);

let n = 0b0111;
let h= parseInt(111,2)
console.log(h);

console.log(n);











