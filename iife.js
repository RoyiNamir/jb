console.clear();

let p = (function () {
  let sum = 0;
  return function banana() {
    return ++sum;
  };
})();

console.log(p());
console.log(p());
console.log(p());
