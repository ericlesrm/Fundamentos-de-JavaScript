// DECLARANDO VARIÁVEIS //



// var
// O variable statement (var) declara uma variável, opcionalmente é possível atribuir à ela um valor em sua inicialização.

var altura = 5;
var comprimento = 7

// let
// let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.

let forma = 'retângulo'
let altura = 5;
let comprimento = 7;
let area;

// if e else 
// A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco
//, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

if (forma === 'retângulo') {
   area = altura * comprimento;
  } else {
    area = (altura * comprimento) / 2;
  }



  // const
  // A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.
  // Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;




// truthy e falsy


// São truthy os valores dos tipos Object, Symbol (introduzido no ES6), strings não vazias e números diferentes de ±0.
// Ex:

if(1)   // entra no if, logo é truthy
if({})  // também entra no if, também é truthy

// São falsy os valores null, undefined, ±0, NaN e strings vazias.
// Ex:

1 == {} // falsy




// Conversão de Tipo (ou typecasting) significa transferência de dados de um tipo de dado para o outro.
// 

String(123) // explícita
123 + ''    // implícitA

const numero = 456;
const numeroString = Number(456);




// console.log()
// O método log() existe essencialmente para permitir o envio de dados para o console de depuração.

console.log(area)







