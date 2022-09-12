const mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add("a");
mySet.add("a");
mySet.add(undefined);
mySet.add(undefined);
mySet.add({ prop: true });
mySet.add({ prop: true });

mySet.add({ name: "Des" });
mySet.add({ name: "Des" });

console.log("Size: ", mySet.size);
