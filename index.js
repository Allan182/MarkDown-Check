import chalk from 'chalk';
import fs from 'fs';

const trataErro = (erro) => {
    throw new Error(chalk.red(erro.code, 'Arquivo ou Diretório Inexistente!'));
}

const pegaArquivo = async (caminhoDoArquivo) => {
    try {
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
        console.log(texto);
    } catch (error) {
        trataErro(error);
    } 
}

pegaArquivo('./arquivos/texto.md');

