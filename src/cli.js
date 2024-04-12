import catchFile from "./index.js";
import fs from 'fs';


const path = process.argv;


function printList(result, identify = '') {

    console.log(
        "List of Links", 
        identify,
        result
    );
}

async function processText(args) {
    const path = args[2];

    try {
        fs.lstatSync(path);
    } catch (error) {
        if (error.code === "ENOENT" ) {
            console.log("Directory or File not Exists!");
            return;
        }
    }

    if (fs.lstatSync(path).isFile()) {
        const result = await catchFile(path);
        printList(result)
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (nameFile) => {
            const list = await catchFile(`${path}/${nameFile}`)
            printList(list, nameFile);
        });
    }
}

processText(path);