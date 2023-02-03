                                              //ALTERANDO ARRAYS //




                                            // Desafio: dividir sala com 20 alunos em duas listas de 10 alunos cada:

const alunos = [
    'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie','Guilherme', 'Aline', 'Fabiana', 'Andre',
    'Carlos','Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
];

// Dividindo os alunos:

       // o .slice() serve para fatiar ou, no caso, dividir 
alunos.slice(0, 10);
             // o segundo parametro usado foi 10 e não 9, por que?
             // ao usar o slice, ele não adiciona o ultimo parametro, então é interessante utilizar o ultimo paraetro um numero a diante 

             // importante, ao executar o console.log(alunos) o JavaScript um array inalterado, por que?
             // o slice não modifica o array já existente, mas sim cria um novo, ou seja, para retornar o array com uma sala de 10 alunos, criasse  uma consta como abaixo:

const sala1 = alunos.slice(0, 10);
// agora sim podemos executar o console .log()

             // para criar a segunda sala com 10 alunos, repetesse o mesmo procedimento feito acima:

              // começa com 10, pois o slice inicia o parametro correto, a peculiaridade já explicada é no parametro final
const sala2 = alunos.slice(10);
              // entretanto, como 20 é o parametro final da lista, não é necessario declara-lo na sala2 (é opcional, porem não altera o resultado) ou muito menos parametrar 21

console.log(sala2);


              // código completo do desafio acima:

const alunos = [
'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie','Guilherme', 'Aline', 'Fabiana', 'Andre',
'Carlos','Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
];

const sala1 = alunos.slice(0, 10);
const sala2 = alunos.slice(10);

console.log(sala1);
console.log(sala2);

              // uma melhor forma de escrever o código acima 

const alunos = [
'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie','Guilherme', 'Aline', 'Fabiana', 'Andre',
'Carlos','Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
];

const sala1 = alunos.slice(0, alunos.length / 2);
                          // foi utilizado length, que significa algo como a largura do array e se dividiu por dois com / 2
                          // dessa forma fica mais dinamico de se trabalhar com muitos valores dentro de um array 
const sala2 = alunos.slice(alunos.length  / 2);

console.log(sala1);
console.log(sala2);




                           // Alterando com splice  

                           // desafio: agora devemos fazer o seguinte: retirar os alunos Ana e Caio do array e adicionar um novo 
                           // aluno chamado Rodrigo, ou seja, remover itens do meio da lista e adicionar mais um valor 

const nomes = {"joão", "Ana", "Caio", "Lara", "Marjorie", "Leo"}

      // diferente do slice, que divide, o splice junta
nomes.splice(1, 2)
            // nos parametros do splice, o primeiro indice é o que queremos remorev, que no caso da ana é o 1
            // o segundo parametro, corresponde a quantidade de indices que queremos resolver, que no caso são 2 (Ana e Caio). Ex:

const nomes = {"joão", "Ana", "Caio", "Lara", "Marjorie", "Leo"}
nomes.splice(1, 2);
console.log(nomes);
            
            // agora, vamos adicionar o Rodrigo como indice no array, removendo ana e Caio ao mesmo tempo:

            const nomes = {"joão", "Ana", "Caio", "Lara", "Marjorie", "Leo"}
            nomes.splice(1, 2 "Rodrigo");
                              /// com a string Rodrigo entre "" dentro do ultimo parametro do splice, o JavaScript executa a operação que estamos almejando 
            // código completo:

const nomes = {"joão","Ana","Caio","Lara","Marjorie","Leo"}
nomes.splice(1, 2 "Rodrigo");
console.log(nomes);




            // concatenação de arrays

const salaJS = ["Evaldo","Camis","Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];
          // como junstar essas duas aulas em uma? utilizando o metodo seguinte:

const salasUnificadas = salaJS.concat(salaPython);
// como uma nova lista será criada apos a concatenação de salaJS com salaPython, criasse uma nova const tento como parametro dentro dos parenteses a lista a ser concatenada
// e a primeira lista fora seguido por concat, que significa concatenar

                                // código completo:

const salaJS = ["Evaldo","Camis","Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];
const salasUnificadas = salaJS.concat(salaPython);

console.log(salasUnificadas);




                    // listas com duas dimensões 

                    // desafio: criar uma lista contendo os alunos, João, Juliana, Caio e Ana. Criar uma lista com as médias 10, 8, 7.5 e 9
                    // e logo após uma lista contendo as duas listas citadas acima 

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
                    
const listaDeAlunosEMedias = [alunos, medias];

console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
    A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}
    `
  );
  

                  // mas e para acessar um aluno em especifico?

 console.log(
    `aluna da posição 1 da lista é: ${listaDeAlunosEMedias[0][1]}`);          
    
// Explicação: primeiro informamos a lista que queremos acessar e a posição que o aluno se encontra dentro da lista ${listaDeAlunosEMedias[0] e, logo depois
// informar qual posição acessar na lista mais interna que no caso é [1]. O resultado será Juliana. 

                 // e se quisermos alem da informação de Juliana, a média dela?
console.log(
` A aluna da posição 1 da lista é: ${listaDeAlunosEMedias[0][1]}.
A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}
`
);
                 
                    // da mesma forma que o anteriormente feito, apenas foi aberto mais um parametro de busca com ${} e os valores de busca da lista mais externa e depois da mais externa 
                      
                    // código completo:

const alunos = ["joão", "Juliana", "Ana"];
const medias = [10, 8, 7.5, 9];      
                    
const listaDeAlunosEMedias = [alunos, medias];

console.log(
   ` A aluna da posição 1 da lista é: ${listaDeAlunosEMedias[0][1]}.
    A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}
    `
);










    

           








            
         
    

              





             