const os = require('os');
const path = require('path');
const fs = require('node:fs');

function task4() {

    const files = ['c1', 'c2' , 'c3', 'c4', 'c5', 'c6', 'c7', 'c8' , 'c9' , 'c10'];

    const content = [
        "firstline \r test \r firstline",
        "secondline \r secondline ",
        "thirdline \rthirdline\rthirdline" ,
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

        let file_lines = fs.readFileSync(__dirname + "/" + files[i] + ".txt" , 'utf-8').split('\r')

        if( i===0) {
            if(file_lines[0]) {
                first = file_lines[0]
            }
        }

        if ( i===1 ) {
            if (file_lines[0] && file_lines[1]) {
                second = file_lines[0] +"\r"+ file_lines[1]
            }
        }

        if ( i===2 ) {
            if (file_lines[0] && file_lines[1] && file_lines[2]) {
                third = file_lines[0] +"\r"+ file_lines[1] +"\r"+ file_lines[2]
            }
        }

    }

    fs.writeFileSync(__dirname + "/result.txt", first + "\r" + second + "\r" + third, () => {});

}

module.exports = task4;