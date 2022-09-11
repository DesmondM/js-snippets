const arr = [1, 2, 3, 4, 5, 6, 7];

const printout = (a) => {
  console.log(a % 2 == 0 ? a : "");
};

console.log(arr.forEach(printout));
