let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  leitor.livrosFavoritos.push(
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    },
  );
  console.log(leitor.nome +' Tem '+ leitor.livrosFavoritos.length + ' livros favoritos. São eles '+ leitor.livrosFavoritos[0].titulo +' e '+ leitor.livrosFavoritos[1].titulo+ '.');