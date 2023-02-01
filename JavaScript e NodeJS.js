// JAVASCRIPT E NODEJS //




// Tipagem dinamica ou untyped//
// Tipagem dinamica é quando você cria uma varável em um tipo (númerica, string ou boleana por exmeplo) e consegue reatribuir seu tipo posteriormente
// EX:

let minhavar = 567;
minhavar = "texto";
minhavar = true;

// ou seja, a variável contendo 567 foi reatribuida a texto e em seguida a booleana




// Multiparadigma
// Siginifa que no JavaScript da para resolver o mesmo problema de formas diferentes




// Linguagem interpretada
// O javaScript é uma linguagem interpretada, ou seja, é uma linguagem que não necessita de um compilador para rodar 




// O que é o NodeJS?
// É uma ferramenta de interpretalçao de JavaScript, normalmente usado no lado servidor (backend)


//  ERROS //




// Inicializador de const
//Ex:

const numero;
const numero = 0;

// No exemplo acima, caso a primeira const fosse rodada no terminal, daria erro pois não foi atribuido nenhum valor (= 0) após a const
// Toda const, ao ser criada, deve obrigatoriamente ter valor atribuido. Do contrario, dará erro de sintaxe ao rodar o código




// Erro de falta de caracter em lista de argumentos 
// Ex:

console.log(numero

// No erro acima, faltou o parentese para fechar o argumento "console.log()", o que se caracteriza como mais um erro de sintaxe.
// É importante se atentar pois qualquer caractere errado (ou a falta dele), pode comprometer o êxito do código.




// Erro de referência
// Ex:

console.log(carro)

// Não existe nada definido para a variável "carro", o que caracteriza erro de não definição/referência




// Quando o código não é executado no terminal devido algum erro, normalmente, no proprio terminal, é demonstrado a linha onde o erro iniciou 
// Esses arquivos que demonstram os erros se chamam stacktrace




// console.api //
// console é uma ferramenta que coloca dados para fora da aplicação, uma especie de inicializador do código.
// .log é um registro de referencia do console, ou seja, mostra o conteudo que o console deve iniciar como em uma string variavél e etc.
// Ex:

console.log(245)

// console é o inicializador
// .log é o "norte" até o valor
// 245 é o valor em si 




// A documentação do JavaScript apresenta vários tipos de "console.", como por exemplo o console.error, console.group e etc




// Tratamento de erro
// o tratamento de erro se trata de comentar os erros 





// É uma boa pratica sempre ir usando os "consoles." para ir comentando a aplicação e testando sua funcionalidade
// Ex:

console.error("deu erro!")







