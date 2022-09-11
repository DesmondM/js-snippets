//currying

const add = (x) => (y) => (z) => {
  console.log("x is :", x, " y is :", y, " z is :", z);
  return x + y + z;
};

add(4)(5)(6);
