var s = new Set();
s.add("hello");
s.add("goodbye");
s.add("hello");
s.add("hello");

console.log(s.size === 2); //true
console.log(s.has("hello")) //true
