const http = require('http')
const path = require('path');
const fs = require('fs')
const {readFile, writeFile, appendFile} = require('fs/promises')


const fileReader = async () => {

    const readf = await readFile(`${__dirname}/users.json`, 'utf-8');
    const readJson = JSON.parse(readf);
    const users_length = readJson['users'].length;
    let first_names = [];

    for (let i =0; i<users_length; i++) {
        first_names[i] = readJson['users'][i]['name']['first']
    }
    await writeFile(__dirname + "/user_counts.txt", JSON.stringify(users_length) , () => {})

    for (let i = 0; i < first_names.length; i++) {
        const writef_usernames = await appendFile(__dirname + "/user_names.txt", first_names[i] + "\r", () => {})
    }
}

// fileReader()


const fileWriteer = () => {
    let a = fs.readFileSync("file.txt", "utf8").trimEnd().split("\n");
    let b = fs.readFileSync("file2.txt", "utf8").trimEnd().split("\n");
    let c = fs.readFileSync("file3.txt", "utf8").trimEnd().split("\n");

    let index = 0;
    let count = 1;
    let result = "";

    while (index < a.length || index < b.length || index < c.length) {

        for (let j = index; j < index + count; j++) {
            if (j < a.length) {
                result += a[j] + "\n";
            }
        }

        for (let j = index; j < index + count; j++) {
            if (j < b.length) {
                result += b[j] + "\n";
            }
        }

        for (let j = index; j < index + count; j++) {
            if (j < c.length) {
                result += c[j] + "\n";
            }
        }

        index = index + count;
        count++;
    }

    fs.writeFileSync("newf.txt", result);
}


fileWriteer();