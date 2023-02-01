// OPERADORES//




// Operadores de comparação

//comparação implicita ==
//Ex:

const numero = 5;
const texto = "5";

console.log(numero == texto)

// no exemlplo, acima apos executar o console.log(numero == texto) o resultado foi true, ou seja, verdadeiro.
// isso aconteceu pois o o JavaScrit converteu nosso texto em número e comparou nosso texto que virou numero
// == faz uma comparação e uma conversão implicita antes de fazer a comparação
// == compara apenas o valor


// comparação explicita ===
// Ex:

const numero = 5;
const texto = "5";

console.log(numero === texto)

// no exemlplo, acima apos executar o console.log(numero === texto) o resultado foi false, ou seja, falso.
// isso aconteceu pois o o JavaScrit não converteu nosso texto em número e não comparou nosso texto que virou numero
// === sempre compara os valores sem conversão implicita. Ou seja, um numero e uma string nunca são iguais quando usamos ===
// === compara o valor e o tipo de dado 



// Tipos de variaveis




// typeof
// typeof é usada para saber o tipo de dado que está sendo atribuida a variavel 
// Ex:

const numero = 5;
const texto = "5";

console.log(typeof number)
console.log(typeof texto)

// em console.log(typeof number) o resultado foi number
// em console.log(typeof texto) o resultado foi texto

// As boas praticas vigentes costumam recomendar sempre o uso de === porém ainda há códigos antigos que utilizam == 




// Operador ternario
// o operador ternario faz uma comparação, funciona mais ou menos como um if e ou um else
// Ex:

const idademinima = 18;
const idadecliente = 16:

if(idadecliente >= idademinima) {
    console.log("cerveja")
    else {
        console.log("suco")
    }
}

// ou seja, se (representado por if) o cliente tiver 18 ou mais (representado por >=) o resultado será: cerveja 
// Se não (representado por else) tiver 18 ou mais o resultado será; suco 

// da para executar esse mesmo código em uma linha apenas como no exemplo a seguir:

console.log(idadecliente >= idademinima ? "cerveja" : "suco")

// ou seja, cliente é igual ou mair que 18 (idadecliente >= idademinima ? resultado "cerveja" cliente menor que 18? (se representa com a pontuação :) resultado "suco"

// é importante tomar cuidado com o uso demasiado de operadores ternarios pois a excessiva utilização torna o código muito complexo de se ler
// caso venha utilizar operador ternario, é uma boa pratica faze-lo com if
// se chama operador ternario pois tem tres operadores de comparação na mesma linha: console.log(idadecliente >= idademinima ? "cerveja" : "suco")




// Template string
// é uma forma de se trabalhar com string no JavaScript
// EX:

const nome = "Ju"
const apresentacao = "meu nome é" + nome;

// esse sinal de + serve para concatenar, isso é, juntar o valor tipo string da variavél nome com a variável apresentacao, resultando assim
// (após executar o console.log(apresentacao) ) em: meu nome é Ju

// Template string surgiu para facilitar a forma de concatenação de strings
// Ex:

const nome = "Ju"
const apresentacao = "meu nome é" + nome;
const idade = 2021-1981;
const cidadedenascimento = "São Paulo"

const apresentacao = "meu nome é" + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadedenascimento;

// ou seja foi gerado um resultado muito complexo cheio de concatenações, o que torna fácil se perder no texto do código
// para isso a template string veio para ajudar nessa questão
// tá, mas como de fato se usa uma template string usando o mesmo exemplo acima? Ex:

const apresentacao = 'meu nome é ${nome}. minha idade é ${idade} e nasci em ${cidadedenascimento}'

// ou seja, na template string, para o código ficar menos complexo, foi aberto '' invés de "" e cada concatenação foi substituida por ${} com o valor 
// da respectiva variável dentro das chaves 








