function multipy(ar, multiplyer, ...theArgs) {
  return theArgs.map((theArg) => {
    return theArg * multiplyer;
  });
}

const theArr = multipy(10, 3, 4, 5);

console.log(theArr);
