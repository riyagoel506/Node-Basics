const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request event");
  res.end("hello world");
});

server.listen(5000, () => {
  console.log("server listing on port: 5000");
});
