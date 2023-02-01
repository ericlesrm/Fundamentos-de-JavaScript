//ARRAYS OU LISTAS //




// Desafio de calcular média de alunos:

const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

               // somando as notas dentro dos parenteses
const media = (nota1 + nota2 + nota3 + nota4) / 4;
                                            // dividindo por 4 com /4

 console.log(media);              
 
 // mas e se o código tivesse que calcular a media de mil notas? É aí que entram os arrays (ou listas), que nada mais são
 // que estruturas de dados que armazenam dados de forma simplificada 

// como criar uma lista?
// Ex:
              // as notas antes representadas por constantes no array seriam preenchidas dentro de colchetes 
const notas = [10, 6.5, 8, 7.5]

                     // o 0 dentro de colchetes representa o primeiro indice representado aqui pela nota 10
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
                                                          // notas.lenght seria o mesmo que notas / quantidade de notas ou largura 
                                                          // nesse exemplo, como estamos calculando a média de 4 notas, o notas.lenght representa essa divisão por 4 

console.log(media);

// mas e se precisar inserir uma nota no array acima sem comprometer a estrutura já formada? nesse caso utilizasse o .push exemplo:
        
          // o valor 7 é a nota a ser adicionada 
notas.push(7);

// apos usar o .push para adicionar a nota de valor 7. devesse ir no array e adicionar o arquivo:

                                                          // a nota adicionada aqui já adicionada ao array
const media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length;

// ou seja, foi possivel adicionar mais uma nota no array sem precisar criar mais uma constante 


// como deletar notas do array que possam ter sido incluidas por acidente? Utilizasse o .pop que nesse caso seria notas.pop
// Ex:

const notas = [10, 6.5, 8, 7.5]

notas.pop();






