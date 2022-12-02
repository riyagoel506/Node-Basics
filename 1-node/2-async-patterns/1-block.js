const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("This is home page");
  } else if (req.url == "/about") {
    //Blocking Code!!
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("This is about page");
  } else {
    res.end("Error Page!");
  }
});

server.listen(5000, () => {
  console.log("server is listing..!!!");
});
