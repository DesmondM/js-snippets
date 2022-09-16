var counter2 = 1;
let config = {
  counter: 1,
  alert: setInterval(() => {
    console.log("Alert....", counter2++);
  }, 1000),
};
config = null;
