// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const name = require("./4-names");
const sayHi = require("./5-utils");
// console.log(name)
const data = require("./6-alternative-flavour");
console.log("data", data);

require("./7-mind-grenade");

sayHi(name.john);
sayHi(name.peter);
