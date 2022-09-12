const myMap = new Map();

const myFunc = () => "greeting";
myMap.set(myFunc, "Hello world");

console.log("First one ", myMap);

myMap.get("greeting");
console.log("Secong one ", myMap);
myMap.set(myFunc, "Good bye");
myMap.get(myFunc, "Good bye");
console.log("Third one ", myMap);
myMap.get(() => "greeting");
console.log("Fourth one ", myMap);
