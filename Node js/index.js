const http = require("http");
const fs = require("fs");

//if We write port 80 then port will now show that is by default feature
const port = "4000" // Fix port
// const port = process.env.PORT; //will get available ports automatically form heroku

//if deploying on heroku then remove hostname from screen everywhere
const hostname = "localhost";
const homepage = fs.readFileSync("./index.html","utf-8");




const server = http.createServer((request, res, next) => {
  if (request.url === "/") {
   return  res.end(homepage);
  }

  if (request.url === "/contact") {
    return  res.end("<h1>Contact Page</h1>");
  }
  if (request.url === "/about") {
    return res.end("<h1>About Page</h1>");
  }

  if (request.url === "/service") {
    return res.end("<h1>Service Page</h1>");
  } else {
    return  res.end("<h1>404 Page Not Found!!!</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is working on http://${hostname}:${port}`);
});
