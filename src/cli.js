import catchFile from "./index.js";
import fs from 'fs';
import listValidate from "./http-validacao.js";

const path = process.argv;


async function printList(validate, result, identify = '') {

    if (validate) {
        console.log(
            "Validate List",
            identify,
            await listValidate(result)
        );
    } else {
        console.log(
            "List of Links",
            identify,
            result
        );
    }


}

async function processText(args) {
    const path = args[2];
    const validate = args[3] === '--validate';
    console.log(validate);

    try {
        fs.lstatSync(path);
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log("Directory or File not Exists!");
            return;
        }
    }

    if (fs.lstatSync(path).isFile()) {
        const result = await catchFile(path);
        printList(validate, result)
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (nameFile) => {
            const list = await catchFile(`${path}/${nameFile}`)
            printList(validate, list, nameFile);
        });
    }
}

processText(path);