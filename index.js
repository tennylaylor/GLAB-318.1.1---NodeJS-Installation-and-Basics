const http = require("http");
const PORT = 3000;
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("Hello World class!");
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write("<p>I wonder what else we can send...</p>");
    res.end();
  })
  .listen(3000, () => {
    console.log(`server running on port:${PORT}`);
  });
//claimed a port 3000 and started the server//
