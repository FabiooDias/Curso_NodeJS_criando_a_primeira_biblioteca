# Curso_NodeJS_criando_a_primeira_biblioteca
Curso relacionado começar a dar os primeiros passos na criação de uma biblioteca, a mesma é utilizada quando precisamos de uma determinada funcionalidade e uma biblioteca oferece a tal funcionalidade que precisamos e dai utilizamos seus métodos e funcionalidades. Também dando os primeiros passos em Nodejs entendendo e configurando o gerenciador de pacote, nele serão instaladas as dependências do projeto. Começando também o entendimento sobre testes unitários em Java Script 
## Node interpretador Java Script
1. Node é um interpretador do Java Script para que os códigos em Java Script sejam executados fora do navegador.
Normalmente o java Script só pode ser executado no navegador
2. Para começar um projeto em Node tem algumas estruturas que sempre devem serem criadas: 
* A primeira delas é o Package.json 
=> Comando: npm init -y ou yarn init
3. Para fazer a instalação de um pacote pode ser feita a instalação Global, ou seja, todas aplicações iram enxergar aquela biblioteca, ou ainda a instalação local, esta
é feita para ser utilizada somento no projeto atual.
* Global comando de instalação: npm install <nome do pacote>
* Local comando de instalação: npm install <nomde do pacote>
4. Após ter instalado algum tipo de pacote através do npm install..., será criado uma pasta na raiz do projeto chamada node_modules, esta pasta vai contar com todos os pacotes que
serão instalados neste projeto. Por este motivo devemos criar agora o arquivo gitignore, neste arquivo será especificado os nomes de pastas que não deverão ser enviadas ao Git 
em um futuro commit.
* pasta gitignore
* Quando for preciso instalar uma versão especifica de um Pacote e ou uma biblioteca: 
* Comando: npm install <nome do pacote>@<versão> 
* Obs: O formato Markdown, com extensão .md é uma linguagem de marcação para a escrita de textos com marcadores simples de formatação que são convertidos pata HTML.
Por exemplo esta linguagem é utilizada em arquivo README.md
* Existem dois modos de Exportação e importação de arquivos em JavaScript e NodeJs.
#### O sistema CJS (CommonJS):
* Para exportar apenas uma função pelo modo CJS:
```
module.exports = function soma(num1, num2) {
 return num1 + num2;
};
```
** OU **
```
function soma(num1, num2) {
 return num1 + num2;
}

module.exports = soma;
```
* É possivel também exportar apenas uma função:
```
function soma(num1, num2) {
 return num1 + num2;
}

function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}

module.exports = multiplica;
```
* Quando nescessitamos exportar mais de uma função, criamos um objeto:
```
function soma(num1, num2) {
 return num1 + num2;
}

function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}

module.exports = { multiplica, soma };
```
* Essa mesmas funções podem serem importadas desestruturando o mesmo objeto:
```
const { multiplica, soma } = require('./caminho/arquivo');

const resultadoMult = multiplica(2, 2);
const resultadoSoma = soma(2, 2);
```

#### O ESM (EcmaScript Modules):
* primeira forma de exportar uma função, através de 'export' na função:
``` 
export function soma(num1, num2) {
 return num1 + num2;
}

export function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}
```
* Outra forma de Exportar somente uma função:
```
function soma(num1, num2) {
 return num1 + num2;
}

function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}

export default multiplica;
```
* Outra forma de exportar Varias Funções:
```
function soma(num1, num2) {
 return num1 + num2;
}

function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}

export { multiplica, soma };
```
* Para fazer a importação de um modulo em outro arquivo:
` import soma from './caminho/arquivo';`
* Importar varias funções de um mesmo Módulo:
` import { soma, multiplica } from './caminho/arquivo';`
* É possivel também importar de uma vez o objeto inteiro de um módulo:
` import * as operacoes from './caminho/arquivo';`
* importando o modulo da seguinte forma:
```
const soma = operacoes.soma(1, 2);
const multiplica = operacoes.multiplica(1, 2);
```
### Promises(Promessas)
 1. JavaScript é uma linguagem sincrona, as ***Promises*** irão fazer sentido no momento é que precisaremos executar uma função, mas que ela execute sem ter que fazer o resto de todo o processo parar, por conta do que ela deve executar, ou seja, irá executar no tempo dela tratando os dados que ela precisa tratar, em contra partida o resto do código continuara sendo executado, sua maior caracteristica é a promessa de resposta, tanto a positiva quanto a negativa de erro se caso houver. Essa tratativa são através do:
 * ***.then(então)*** -> este trata caso der certo a promessa da função, ele que recebe uma função callback e retorna um "objeto-promessa".
 * ***.catch(pegar)*** -> este trata caso der errado a promessa da função, este retorna no caso de rejeição da Promise.
