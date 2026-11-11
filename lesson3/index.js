// const os = require('os');
// const mymodule = require('./myModule')
// mymodule.func1()
// mymodule.sayHello()
// console.log(__dirname)
// console.log(__filename)
// setTimeout(() => {
//     console.log("hello world")
// }, 1000);
// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname, '/text');
// const textIn = fs.readFileSync(`${dirpath}/input.txt`, 'utf-8');
// console.log(textIn);
// const arr = textIn.split('\r\n');
// console.table(arr);
// for (let i = 0; i < arr.length; i++) {
//     const line = arr[i].split(' ');
//     console.table(line)
// }

// const path = require('path');
// console.log(path.sep);
// const filePath = path.join('content', 'subfolder', 'test.txt');
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);
// const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
// console.log(absolute);


// const task4 = require('./task4/task4');
//
// task4()


const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader("Content-type", "text/html")

    // res.write(
    //     '<html>' +
    //     '<head><title>asfasf</title></head> <body> <script> alert("asfasf") </script> </body> </html>'
    // );
    //
    res.write("asfasfas")


    res.end()

})

const PORT = 3000;
server.listen((PORT), () => {

    console.log('test')
    console.log(`server is running on http://localhost:${PORT}`);
})