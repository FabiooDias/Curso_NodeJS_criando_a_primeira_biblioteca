const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;

    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há um arquivo no caminho'))
}

async function pegarArquivo(caminho) {
    
    const caminhoAbsoluto = path.join(__dirname, '/', caminho);

    const encoding = 'utf-8'
    try {
        const arquivos = await fs.promises.readdir(caminhoAbsoluto, encoding);

        const result = await Promise.all(arquivos.map(async (arquivo) => {
            const localArquivo = `${caminhoAbsoluto}/${arquivo}`
            const texto = await fs.promises.readFile(localArquivo, encoding)
            return extraiLinks(texto)
        }));
        return result[0]
    } catch(erro){
       return trataErro(erro)
    }
    
}

module.exports = pegarArquivo;
// function pegarArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8'
//     fs.promises.readFile(caminhoDoArquivo, encoding)
//         .then((texto) => chalk.green(console.log(texto)))
//         .catch((erro) => trataErro(erro))
// }

// function pegarArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if(erro){
//             trataErro(erro)
//         }
//         console.log(chalk.green(texto))
//     })
// } 

//Promessas
// function promessaTexto(caminhoTexto) {
//     return new Promise((resolve, reject) => {
//         if (!caminhoTexto) {
//             reject(new Error("Falha na promessa"))
//         }
//         resolve(pegarArquivo(caminhoTexto))
//     })
// }

// promessaTexto('./arquivos/texto.md')
//     .then((texto) => { console.log(texto) })
//     .catch((erro) => { trataErro(erro) })


// Async e await
// async function pegarArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8'
//     try {
//         const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
//         return extraiLinks(texto);
//     } catch (erro) {
//         trataErro(erro)
//     } finally {
//         console.log(chalk.yellow('Operação Concluida'))
//     }

// }


