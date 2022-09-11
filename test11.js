(() => {
  let x, y;
  console.log(" x print ", x);
  console.log(" y print ", y);
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log("First x print ", x);
    console.log("First y print ", y);
  }
  console.log("Second x print ", x);
  console.log("Second y print ", y);
})();
