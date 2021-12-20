const fetch = require('node-fetch')

function manejaErros(erro) {
    throw new Error(console.error.message)
}

async function checaStatus(arrayURLs) {
    try {
        // Promises async await
        const arrayStatus = await Promise.all(arrayURLs.map(async url => {
            const res = await fetch(url)
            return `${res.status} - ${res.statusText}`;
        }))
        return arrayStatus;
    } catch(erro) {
        manejaErros(erro)
    }
}

async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links)
    const resultados = arrayLinks.map((objeto, indice) => ({ ...objeto, status: statusLinks[indice] }))
    return resultados;
}

function geraArrayDeURLs(arrayLinks) {
    //loop para cada { chave: valor } para obter os valores de cada URL
    // objeto -> [valor] pegar o valor de cada chave
    //Object.values / Método utilizado para obter somente o valor de cada chave

    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

module.exports = validaURLs;