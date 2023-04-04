import chalk from "chalk";
import fs from 'fs';
import { parse } from "path";


function treatError(erro) {
    throw new Error(chalk.red(erro.code, 'erro de abertura do arquivo'))
}


function parser(path) {
    fs.promises
      .readFile(path, 'utf-8')
      .then((texto) => console.log(chalk.green(texto)))
      .catch(treatError)
}

// function pegaArquivo(path) {
// 
//     fs.readFile(path, 'utf-8', (erro, text) => {
//         if(erro) treatError(erro)
//         console.log(chalk.green(text))
//     })
// }

parser('./texto.md')