import pokemonList from "../../src/data";

describe('1 - Crie duas rotas para a aplicação: a rota principal `/` e a rota `/about`', () => {
  it('Será veririficado se, ao entrar na rota `/`, as informações corretas são renderizadas',
    () => {
      cy.visit('http://localhost:3000/');
      
      const [firstPokemon] = pokemonList;
      const {name, type, averageWeight: {value, measurementUnit}} = firstPokemon

      cy.get("h1").contains('Pokédex');
      cy.contains(name);
      cy.contains(type);
      cy.contains(`Average weight: ${value} ${measurementUnit}`);

      cy.get("h1").contains('About pokédex').should('not.exist');
    });

    it('Será verificado se, ao entrar na rota `/about` é renderizado uma tag `h1` com o texto `About Pokédex`',
    () => {
      cy.visit('http://localhost:3000/about');

      const [firstPokemon] = pokemonList;
      const {name, type, averageWeight: {value, measurementUnit}} = firstPokemon

      cy.get("h1").contains('About Pokédex');
      
      cy.contains(/^Pokédex$/).should('not.exist');
      cy.contains(name).should('not.exist');;
      cy.contains(type).should('not.exist');;
      cy.contains(`Average weight: ${value} ${measurementUnit}`).should('not.exist');;
    });
});
