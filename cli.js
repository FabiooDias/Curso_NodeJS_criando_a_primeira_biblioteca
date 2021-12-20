#!/usr/bin/env node
const chalck = require('chalk');
const pegarArquivo = require('./index');
const validaURLs = require('./http-validacao');

const caminho = process.argv;
console.log(caminho)

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegarArquivo(caminhoDeArquivo[2]);
    if (caminhoDeArquivo[3] === 'validar') {
        console.log(chalck.yellow('Links validados', JSON.stringify(await validaURLs(resultado), null, 4)))
    } else {
        console.log(chalck.yellow('Lista de Links'), resultado);
    }
}

processaTexto(caminho);