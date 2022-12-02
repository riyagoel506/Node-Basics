const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    // const data = fs.readFileSync("./content/big.txt", "utf-8");
    // res.end(data);

    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => console.log(err));
  })
  .listen(5000);
