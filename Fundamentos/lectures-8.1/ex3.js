// 3 - Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (Gabarito);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para 
// isso essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for "N.A");

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, studentAnswers) => {
    rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
    let studentGrade = 0
    for (let index = 0; index < rightAnswers.length; index += 1){
        if (rightAnswers[index] === studentAnswers[index]){
            studentGrade += 1;
        } else if (rightAnswers[index] !== studentAnswers[index] && studentAnswers[index] === 'N.A'){
            studentGrade = studentGrade;
        } else if (rightAnswers[index] !== studentAnswers[index] && studentAnswers[index] !== 'N.A'){
            studentGrade -= 0.5;
        }
    }
    return studentGrade;
};

const studentScore = (rightAnswers, studentAnswers, callback) => {
    rightAnswers = [];
    studentAnswers = [];
    return `Resultado Final é: ${callback()} Pontos!`
}
console.log(studentScore(rightAnswers, studentAnswers, checkAnswers));
