const greeting = () => {
  throw "Helloworld";
};

const sayHi = () => {
  try {
    const data = greeting();
    console.log("It worked", data);
  } catch (e) {
    console.log("Oh no error", e);
  }
};

sayHi();
