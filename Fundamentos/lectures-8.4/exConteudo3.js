const estudantes = require ('./baseEstudantes')


// Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!
const expectedResult = [
    { name: 'Jorge', materia: 'Português' },
    { name: 'Mario', materia: 'Biologia' },
    { name: 'Jorge', materia: 'Português' },
    { name: 'Maria', materia: 'Química' },
    { name: 'Natalia', materia: 'Português' },
    { name: 'Wilson', materia: 'Português' },
  ];

  const getBestClass = (acc, materia) => {
    if (acc.nota > materia.nota) return acc;
    return materia;
  };

  const reportBetter = (students) => students.map((student) => sss({
    name: student.nome,
    materia: student.materias.reduce(getBestClass).name}));
    
      
  console.log(reportBetter(estudantes));