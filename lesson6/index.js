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
    const fileWriteer = () => {
        const names = ["file.txt", "file2.txt", "file3.txt"];
        const files = [];

        for (let i = 0; i < names.length; i++) {
            let text = fs.readFileSync(names[i], "utf8");
            files.push(text ? text.trimEnd().split("\n") : []);
        }

        let index = 0;
        let count = 1;
        let result = "";
        let hasLines = true;

        while (hasLines) {
            hasLines = false;

            for (let i = 0; i < files.length; i++) {
                if (index < files[i].length) {
                    hasLines = true;
                }
            }

            if (hasLines) {
                for (let i = 0; i < files.length; i++) {
                    for (let j = index; j < index + count; j++) {
                        if (j < files[i].length) {
                            result += files[i][j] + "\n";
                        }
                    }
                }

                index = index + count;
                count++;
            }
        }

        fs.writeFileSync("newf.txt", result);
    };

    fileWriteer();
}


fileWriteer();