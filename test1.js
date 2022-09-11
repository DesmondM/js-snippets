const isRequired = () => {
  throw new Error("Param is required");
};

const print = (num = isRequired()) => {
  console.log(`printing ${num}`);
};
print(2);
print();
print(false);
console.log("Test");
