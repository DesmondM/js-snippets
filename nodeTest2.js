const EventEmittz = require("events");

const celeb_theSubject = new EventEmittz();

celeb_theSubject.on("race", (result) => {
  if (result === "win") {
    console.log("You are the winner ");
  }
});
celeb_theSubject.on("race", (result) => {
  if (result === "loss") {
    console.log("Boring person.... ");
  }
});

process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
});

celeb_theSubject.emit("race", "loss");
celeb_theSubject.emit("race", "win");
