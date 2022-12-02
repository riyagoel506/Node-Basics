const Eventemitter = require("events");

const customEmitter = new Eventemitter();

// There are two things:

// on- Listen for an event
// emit- emit an event

// ==== The function which is on needs to emit also

// There is some syntax, like you cant write on function after emit
customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} and ${id}`);
});
customEmitter.on("response", () => {
  console.log("data received 2");
});
customEmitter.emit("response", "riya", 32);
