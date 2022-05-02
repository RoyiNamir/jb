console.clear();

var p = function ppp() {
  let sum = 0;
  return function banana() {
    return ++sum;
  };
};
var k = p();
console.log(k());
console.log(k());
console.log(k());
