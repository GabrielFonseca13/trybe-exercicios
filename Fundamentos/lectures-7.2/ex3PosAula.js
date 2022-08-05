const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//   Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const criaTurnoNoite = (objeto, chave, valor) => (objeto[chave] = valor);
criaTurnoNoite(lesson2, "turno", "noite");
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listaKeys = (objeto) => console.log(Object.keys(objeto));
listaKeys(lesson2);

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const showLength = objeto => console.log(Object.entries(objeto).length);
showLength(lesson2);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listaValues = objeto => console.log(Object.values(objeto));
listaValues(lesson2);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalAlunos = objeto => {
    let alunos = 0;
    const array = Object.keys(objeto);
    for (index in array){
        alunos += objeto[array[index]].numeroEstudantes;
    }
    return alunos;
}
console.log(totalAlunos(allLessons));

//Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:

const getValueByNumber = (objeto, index) => {
const element = Object.values(objeto);
return element[index];
}
console.log(getValueByNumber(lesson1, 1));