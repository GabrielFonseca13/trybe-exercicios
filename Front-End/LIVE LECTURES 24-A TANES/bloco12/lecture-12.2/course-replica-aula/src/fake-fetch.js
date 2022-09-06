const TIME_IN_MILLISECONDS = 1000;

function fakeFetchSolutions() {
  return Promise.resolve({
    json: () => new Promise((resolve) => {
      setTimeout(() => resolve({ results: [
        {
          lecture: '12.1',
          name: 'Ciclo de Vida de Componentes e React Router',
        },
        {
          lecture: '12.2',
          name: 'Ciclo de Vida de Componentes e React Router',
        },
        {
          lecture: '12.3',
          name: 'Projeto TrybeTunes',
        }],
      }), TIME_IN_MILLISECONDS);
    }),
  });
}

function fakeFetchSolutionsId(id) {
  return Promise.resolve({
    json: () => new Promise((resolve) => {
      setTimeout(() => resolve([
        {
          lecture: '12.1',
          exercises: ['1', '2', '3', '4'],
        },
        {
          lecture: '12.2',
          exercises: ['5', '6', '7', '8'],
        },
        {
          lecture: '12.3',
          exercises: ['9', '10', '11', '12'],
        },
      ].find((exercise) => exercise.lecture === id)), TIME_IN_MILLISECONDS);
    }),
  });
}

export { fakeFetchSolutions, fakeFetchSolutionsId };
