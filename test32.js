const add = (x) => (y) => (z) => {
  console.log("x: ", x, " y: ", y, " z: ", z);
  return x + y + z;
};

console.log("The sum is ", add(4)(5)(6));

console.log("50" + 50 - 50); //5000
