let randomValue = {
  name: "Lydia",
  age: 20,
};
randomValue = 23;

if (!typeof randomValue === "string") {
  console.log("It is not a string");
} else {
  console.log("It it might be a number");
}
