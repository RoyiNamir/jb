console.clear();
function Person (myName,age){
  this.name=myName;
  this.age=age;
}

var arr=[];
for (let i =0 ;i <10; i++){
  let per = new Person("ani"+i,i*10);
   arr.push (per)
    
}

console.log(arr)
