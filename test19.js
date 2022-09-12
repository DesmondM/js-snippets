const findPosition = (arr, fn) => {
  let pos = false;
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    for (let j = 0; j < row.length; j++) {
      if (fn(row[j])) {
        pos = [i, j];
        break;
      }
    }
  }
};

console.log(findPosition([3, 2, 6, 4, 9, 3, 6, 5], 4));
