import chalk from 'chalk';
import fs from 'fs';


const debugError = (erro) => {
    throw new Error(chalk.red(erro.code, 'Directory or File not Exists!'));
}

const catchFile = async (pathFile) => {
    try {
        const enconding = 'utf-8';
        const text = await fs.promises.readFile(pathFile, enconding);
        return extractLinks(text);
    } catch (error) {
        debugError(error);
    }
}

const extractLinks = (string) => {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const catchs = [...string.matchAll(regex)];
    const result = catchs.map(element => ({ [element[1]]: element[2] }));
    return result.length !== 0 ? result : 'No Have links in the File!';
}


export default catchFile;
