describe('2 - Crie a rota para a página que exibirá mais infromações do pokémon. Adicione link para essa rota no card que exibe o pokémon na página inicial', async () => {
  it('Será verificado se, ao acessar a rota `/pokemon/25` existe um título `h1` com o texto `Pikachu details`',
    () => {
      cy.visit('http://localhost:3000/pokemon/25');

      cy.get('h1').contains('Pikachu details');
      cy.contains('Alakazam details').should('not.exist');
    });

    it('Será verificado se, ao acessar a rota `/pokemon/65` existe um título `h1` com o texto `Alakazam details`',
    () => {
      cy.visit('http://localhost:3000/pokemon/65');

      cy.get('h1').contains('Alakazam details');
      cy.contains('Pikachu details').should('not.exist');
    });
});