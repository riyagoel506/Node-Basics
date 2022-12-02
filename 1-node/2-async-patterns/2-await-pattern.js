const { readFile, writeFile } = require("fs").promises;

// We Can also read and write the file with the help of util

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    console.log(first, second);

    await writeFile(
      "./content/result-mind-grenade.txt",
      `This is awesome, ${first} and ${second}`
    );
  } catch (error) {
    console.log(error);
  }
};
start();

// This is the simple way to read a file

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
