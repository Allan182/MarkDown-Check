import chalk from 'chalk';
import fs from 'fs';


const trataErro = (erro) => {
    throw new Error(chalk.red(erro.code, 'Arquivo ou Diretório Inexistente!'));
}

const pegaArquivo = async (caminhoDoArquivo) => {
    try {
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
        return extraiLinks(texto);
    } catch (error) {
        trataErro(error);
    }
}

const extraiLinks = (string) => {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...string.matchAll(regex)];
    const result = capturas.map(elemento => ({ [elemento[1]]: elemento[2] }));
    return result.length !== 0 ? result : 'Não há links no arquivo!';
}


export default pegaArquivo;
