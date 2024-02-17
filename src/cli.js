import pegaArquivo from "./index.js";

const path = process.argv;
 
async function processText(path){
    const result = await pegaArquivo(path[2]);
    console.log(result);
}

processText(path);