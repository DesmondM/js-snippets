//const mission = "learning";
const mission = process.argv[2];

if (mission === "learning") {
  console.log("Time to write some node code");
} else {
  console.log(`Is ${mission} really fun`);
}
