const http = require("http");

console.log(" Running so far");
const PORT = 5000;
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        id: 1,
        name: "Hello there this is a boooomb.... big time",
      })
    );
  } else if (req.url === "/messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li> The first item </li>");
    res.write("<li> The second item </li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
});
//    else {
//     res.statusCode = 404;
//     res.end();
//   }

server.listen(PORT, () => {
  console.log(`Check on port ${PORT}`);
});
