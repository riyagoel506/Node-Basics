const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log("File path", filePath);

const base = path.basename(filePath);
console.log("Base", base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
