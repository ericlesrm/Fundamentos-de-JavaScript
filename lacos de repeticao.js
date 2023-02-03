// LAÇOS DE REPETIÇÃO //




//Procurando itens em uma lista 

// Desafio: criar uma função que recebe commo argumento o nome de um aluno, depois verificar se o aluno está presente na lista e retornar a média final que se encontra no mesmo índice
// se o nome do aluno não estiver na lista, retornar uma mensagem indicando que o aluno não foi encontrado

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];


function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
     const indice = listaDeAlunosEMedias[0].indexOf(aluno);

     const mediaDoAluno = listaDeAlunosEMedias[1][indice]; 

    } else {
    console.log("Aluno não encontrado")
  }
 }
    
exibeNomeENota("João");
    


// Desestruturando uma lista

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");




// for 
// Desafio: imprimir o indice e a lista com os seguintes numeros: - 100, 200, 300, 400, 500 e 600

const numeros = [100, 200, 300, 400, 500, 600];


     // a primeira expressão é executada apenas uma única vez: let indice = 0
     // a segunda expressão é uma consição de execução do bloco for: numeros.length
     // a terceira expressão é executada sempre ao final do bloco: indice++ q que é o mesmo que indice = 1 + 1
     for ( let indice = 0; numeros.length; indice++) {
    console.los(numeros[indice]);
   
}




                                              // média com for 

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = = 0;

for (let i = 0; indice < notas.length; indice++); {
    somaDasNotas += notas[i];
}

const media = somaDasNotas /notas.length;

console.log("A media das notas é ${media}");




                                           // média com for of

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let elemento of notas) {
    somaDasNotas += nota;
}

const media = somaDasNotas /notas.length;

console.log("A media das notas é ${media}");