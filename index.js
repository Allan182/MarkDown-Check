import chalk from 'chalk';
import fs from 'fs';


const trataErro = (erro) => {
    throw new Error(chalk.red(erro.code, 'Não há arquivos no diretório')); 
}

const pegaArquivo = (caminhoDoArquivo) => {
    const enconding = 'utf-8';    
    fs.promises
        .readFile(caminhoDoArquivo, enconding)
        .then(texto => console.log(chalk.green(texto)))
        .catch(erro => trataErro(erro));
}

pegaArquivo('./arquivos/texto.mdx');