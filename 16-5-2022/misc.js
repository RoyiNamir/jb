let arr = [{a:1},{b:2},{c:30},{d:4},{e:5},NaN];


//console.log(arr.indexOf(NaN));//-1
console.log(arr.includes(NaN));//-1


//where is the object which has a:3 ? 
//console.log(arr.find(i=>Object.values(i)==30)); //the result is the obj itself
//console.log(arr.find(i=>i.a==999)); //the result is the obj itself
//console.log(arr.findIndex(i=>i.a==3)); //the result is the obj itself
