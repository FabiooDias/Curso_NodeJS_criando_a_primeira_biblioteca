const pegarArquivo = require('../index')

const arrayResult = [
    {
        FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList"
    }
]

describe('pegaArquivo::', () => {
    it('string deve ser uma função', () =>{
        expect(typeof pegarArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async() => {
        const resultado = await pegarArquivo('C:\\Users\\Fabio\\Desktop\\Curso_NodeJs_Criando_a_primeira_biblioteca\\test\\arquivos');
        expect(resultado).toEqual(arrayResult)
    })

    it('deve retornar mensagem "não há links"', async () =>{
        const resultado = await pegarArquivo('C:\\Users\\Fabio\\Desktop\\Curso_NodeJs_Criando_a_primeira_biblioteca\\test\\arquivos');
        expect(resultado).toBe('Não há links');
    })

    it('deve lançar um erro na falta de um arquivo', () => {
        async function capturaErro() {
            await pegarArquivo('C:\\Users\\Fabio\\Desktop\\Curso_NodeJs_Criando_a_primeira_biblioteca\\test\\arquivos')
            expect(capturaErro).toThrowError(/não há um arquivo no caminho/)
        }
    })
})
