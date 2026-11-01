const os = require('os');
const path = require('path');
const fs = require('node:fs');

function task4() {


    const files = ['c1', 'c2' , 'c3', 'c4', 'c5', 'c6', 'c7', 'c8' , 'c9' , 'c10'];

    const content = [
        "asfasf\r\ntest\r\nascascasc",
        "asfasf \r\n test ",
        "asfasf \r\n test",
        "asfasf \r\n test",
        "asfasf \r\n test",
        "asfasf \r\n test",
        "asfasf \r\n test",
        "asfasf \r\n test",
        "asfasf \r\n test",
        "asfasf \r\n test",
    ];

    fs.writeFileSync(__dirname + "/result.txt", "", () => {});

    for (let i = 0; i <= files.length - 1; i++) {

        const file = __dirname + "/" +files[i] + ".txt";

        if( !fs.existsSync(file) ) {
            fs.writeFileSync( file, String(content[i]), ()=>{});
        }

    }


    console.log(fs.readFileSync(__dirname + "/" + files[0] + ".txt" , 'utf-8').split('\r\n'))

}

module.exports = task4;