const os = require('os');
const path = require('path');
const fs = require('node:fs');

function task4() {

    const files = ['c1', 'c2' , 'c3', 'c4', 'c5', 'c6', 'c7', 'c8' , 'c9' , 'c10'];

    const content = [
        "firstline \r test \r firstline",
        "secondline \r secondline ",
        "asfasf \rtest\rtest" ,
        "asfasf \rtest",
        "asfasf \rtest",
        "asfasf \rtest",
        "asfasf \rtest",
        "asfasf \rtest",
        "asfasf \rtest",
        "asfasf \rtest",
    ];


    let first = "";
    let second = "";
    let third = "";

    for (let i = 0; i <= files.length - 1; i++) {

        const file = __dirname + "/" +files[i] + ".txt";

        if( !fs.existsSync(file) ) {
            fs.writeFileSync( file, String(content[i]), ()=>{});
        }


        if( i===0) {
            first = fs.readFileSync(__dirname + "/" + files[i] + ".txt" , 'utf-8').split('\r')[0]
        }

        if ( i===1 ) {
            second = fs.readFileSync(__dirname + "/" + files[i] + ".txt" , 'utf-8').split('\r')[0] + fs.readFileSync(__dirname + "/" + files[i] + ".txt" , 'utf-8').split('\r')[1]
        }

        if ( i===2 ) {
            third = fs.readFileSync(__dirname + "/" + files[i] + ".txt" , 'utf-8').split('\r')[0]+ "\r" +
                fs.readFileSync(__dirname + "/" + files[i] + ".txt" , 'utf-8').split('\r')[1]+ "\r" +
                fs.readFileSync(__dirname + "/" + files[i] + ".txt" , 'utf-8').split('\r')[2] + "\r"
        }

    }

    fs.writeFileSync(__dirname + "/result.txt", first + "\r" + second + "\r" + third, () => {});

}

module.exports = task4;