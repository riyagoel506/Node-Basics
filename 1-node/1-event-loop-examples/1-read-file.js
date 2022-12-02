const { readFile, writeFile } = require("fs");

console.log("Starting...");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
console.log("Next one...!");
