const http = require("http");

// Before what we did?

// const server = http.createServer((req, res) => {
//     res.end("welcome")
// })

//Using Event Emitter API
const server = http.createServer();

//emits request event
//subcribe to  it / lister for it / respond to it
server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(5000);
