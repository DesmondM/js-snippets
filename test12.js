const useReduce = (arr1) => {
  arr1.reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2]
  );
};
const arr1 = [
  [0, 1],
  [2, 3],
];
console.log(useReduce(arr1));
