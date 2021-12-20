const {default: axios} = require('axios')


function pegaEnd(cep){
    const result = axios.get(`https://viacep.com.br/ws/${cep}/json`)
    console.log(result.data)
    return result
}



(async function main(){
    //const endereco = await pegaEnd(13732570);
    const listaCep = ['13732570', '04272000', '01002000']
    const consultaCep = listaCep.map(cep => pegaEnd(cep))
    console.log(consultaCep)
    const enderecos_resposta = Promise.all(consultaCep)
    console.log(await enderecos_resposta)
    console.log('iniciei')    
})();