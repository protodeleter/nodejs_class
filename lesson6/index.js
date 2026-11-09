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

    const files_to_write = ["file.txt", "file2.txt" , "file3.txt"];



    for (let i=0; i < files_to_write.length; i++) {
        const file_path = __dirname+"/" + files_to_write[i];
        const file_exists = fs.existsSync(file_path );
        if ( !file_exists ) {
            fs.writeFile( file_path, "", () => {});
        }
    }



    for (let i=0; i<files_to_write.length; i++) {
        const file_path = __dirname+"/" + files_to_write[i];

        const current_file = fs.readFileSync(file_path, 'utf-8');

        const lines_split = current_file.split('\n');

        console.log(lines_split)

        for (let j=0; j<lines_split.length; j++) {

            fs.appendFile(__dirname + "/newf.txt", lines_split[i] + "\r",() => {});

        }


    }




}


fileWriteer();