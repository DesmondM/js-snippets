function adder(a, b, callbackFxn) {
  let sum = a + b;
  return callbackFxn(sum);
}

console.log(adder(4, 5, (value) => value * 2));
console.log(adder(4, 5, (value) => value % 2));
