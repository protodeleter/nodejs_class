const os = require('os');
const sayHello = require('./my.module');
require('./my.module');
const username = os.userInfo();

console.log(username);

sayHello();

const fs = require('fs');

const textIn = fs.readFileSync('./text.txt', '');

console.log(textIn);

const textOut = `asfasf ${textIn}`;

console.log(textOut);
