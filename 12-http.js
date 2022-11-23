const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url == "/") {
    res.end("This is home page");
  } else if (req.url == "/about") {
    res.end("This is about page");
  } else {
    res.end(`
    <h1>OOPS! This page is not working</h1>
    <a href="/">Back to home page</a>
    `);
  }
});

server.listen(5000);
