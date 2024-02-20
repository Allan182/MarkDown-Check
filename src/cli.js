import pegaArquivo from "./index.js";
import fs from 'fs';


const path = process.argv;


function printList(result) {
    console.log("Lista de Links", result);
}

async function processText(args) {
    const path = args[2];
    if (fs.lstatSync(path).isFile()) {
        const result = await pegaArquivo(path);
        printList(result)
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (nameFile) => {
            const list = await pegaArquivo(`${path}/${nameFile}`)
            printList(list);
        });
    }
}

processText(path);