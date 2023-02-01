// FUNÇÕES //




// O que são funções? Trechos de código que separamos em declarações e que mandamos chamar 
// As funções são interessantes pois podemos reutilizar a parte de um código. 
// Ou seja, conseguimos usar várias vezes sem repetir o bloco de código
// Também é interessante usar funções pois elas separam o código em partes, ficando assim mais fácil de ler posteriormente para casos de manutenção por exemplo




// Declaração de função


// usasse função para que uma determinada parte de código só seja executada no momento em que queremos 
 
// primeiro declara a função. Ex:

                     //string - também poderia ser outro tipo de valor como booleana ou number
function ImprimeTexto(texto) {
    console.log(texto)
}

// em seguida executa a função uma ou mais vezes 

ImprimeTexto("Oi");
ImprimeTexto("Outro texto");

// outro exemplo:

function soma(){
    return 2 + 2;
    // o return foi utilizado para que ao ser executado o console.log(soma()) o console retorne o valor solicitado
    // mesmo com o return, a variavél continua armazenando o valor 2 + 2
}

console.log(soma())

// outro exemplo

function ImprimeTexto(texto) {
    console.log(texto)
}

ImprimeTexto(soma());

// No exemplo acima, o JavaScript executa a função soma e pega o valor de retorno e passando o valor de string para number resultado o valor 4 no console 




// Parametros 


// o código abaixo apresenta um problema que é: a função soma guarda o valor de 2 + 2 
// Ou seja, se quisermos somar outro valor, teremos que fazer o procedimento após o código abaixo

function soma() {
    return 2 + 2;
}

console.log(soma())

// resolução do problema acima


function soma(numero1, numero2) {
    return num1 + num2;
           // o num1 + num2 apos o return são parametros de função que servem para que a função receba informações necessarias para que ela execute corretamente 
           // ou seja, para uma função que soma dois números funcionar corretamente e funcionar com qualquer conjunto de dois números 
           // se passa via parametro que ela vai receber que ela vai receber número 1 e número 2 (num1 + num2)
}

console.log(soma())

// para que o código acima seja executado com êxito, devesse atribuir valor aos num1 e num2
// Exemplo de código coeso:


function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 2))

// da forma demonstrada acima em console.log(soma(2, 2)) podesse somar qualquer número sem comprometer a função a um valor fixo




// Expressão de função

// é uma outra forma de se excrever funções em JavaScript
// Ex:

const soma = function(num1, num2) {return num1 + num2} 
console.log(soma(1, 1))

// A principal diferençã entre declaração e expressão de função é: funções e var são "listadas" no topo, ou seja, se executar 
// console.log acima da função ela irá funcionar normalmente
// Ex:

console.log(apresentar());

function apresentar() {
    return "Olá";
}




// Arrow function


//é uma função com um só parametro que não utiliza parenteses para fechar parametros e nem chaves para fechar o bloco de código e que utiliza a "flecha" =>
// a função arrow também não precisa do return
// Ex1:

const apresentarArrow = nome => "meu nome é ${nome}";

// Ex2:

const soma = (num1, num2) => "meu nome é ${nome}";

// se a const arrow function tiver mais de uma linha, é necessário usar chaves e return 
// Ex:

const somaNumerosPequenos = (Num1, Num2) => {
    if (Num1 > 10 || Num2 > 10) {
        return "somente números de 1 a 9"
    }   else {
        return Num1 + Num2;
    }
}




// como saber quando usar algum dos 3 tipos de funções? 

// Arrow funcion é uma forma rápida e curta de escrever, ou seja, o código fica mais curto, porém, se ela ficar muito complexa,
// é melhor usar declaração de função para escrever

// hoisting: arrow function se comporta da mesma forma que a expressão 




















