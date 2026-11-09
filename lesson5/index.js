// // callback hell
// // use promises or async-await instead
//
// const { readFile, writeFile } = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, '/text');
//
// console.log('start');
// readFile(`${dirPath}/first.txt`, 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const first = result;
//     readFile(`${dirPath}/second.txt`, 'utf8', (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const second = result;
//         writeFile(
//             `${dirPath}/result-async.txt`,
//             `Here is the result : ${first}, ${second}`,
//             (err, result) => {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 }
//                 console.log('done with this task');
//             },
//         );
//     });
// });
// console.log('starting next task');


const path = require('path')
const { readFile, writeFile } = require('fs/promises');
const dirPath = path.join(__dirname, '/text');
const fs = require('fs')

const fileReader =  () => {
    try {
        const input =  fs.readFileSync(`${dirPath}/input.txt`, 'utf8');

        const strToArr = input.split(" ");
        let newStr = "";

        for (let i = 0; i<strToArr.length; i++) {
            newStr += strToArr[i].toUpperCase() + " "
        }
        console.log(newStr)

    } catch (error) {
        console.log(error);
    }

}

// fileReader()


const fileReader2 = async () => {

    const fl = await readFile(`${dirPath}/input.txt`, 'utf8');

    let newstr = fl + " Proccessed by nodejs"

    console.log(newstr)
}

fileReader2();