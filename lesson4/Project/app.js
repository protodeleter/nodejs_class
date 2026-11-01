const http = require("http");
const fs= require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/Templates");

const file2Send = fs.readFileSync(`${dirPath}/page.html`);

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html");


    console.log(req.method)
    res.write(
        file2Send
    )
    res.end();

})

server.listen(3000, () => {

})