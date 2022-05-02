function calc(n) {
  if (calc["myResult" + n] != undefined) return calc["myResult" + n];

  let result = 0;
  for (let i = 0; i < 1000; i++)
    for (let a = 0; a < 1000; a++)
      for (let b = 0; b < 1600; b++) result = Math.pow(n, 300);

  calc["myResult" + n] = result;

  return result;
}

console.log(".......");
console.log(calc(3));
console.log(".......");
console.log(calc(3));
console.log(".......");
console.log(calc(3));
