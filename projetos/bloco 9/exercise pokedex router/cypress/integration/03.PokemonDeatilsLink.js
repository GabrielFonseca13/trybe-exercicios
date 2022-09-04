import pokemonList from "../../src/data";

describe('3 - Crie um link para o pokémon que está sendo exibido na página inicial, direcionando para a página de detalhes do pokémon. Na página de detalhes, exiba todas as informações do respectivo pokémon', async () => {
  it('Será verificado que, na página inicial, existe um link que direciona para página de detalhes do pokémon que está sendo exibido',
  () => {
    const {id} = pokemonList[0]; 

    cy.visit('http://localhost:3000/');
    cy.contains(/details/i).click()
    cy.location('pathname').should('eq', `/pokemon/${id}`);
  });

  it('Será verificado que, na página inicial, o link para página de detalhes direciona corretamente mesmo após alterar o pokémon que está sendo exibido',
  () => {
    const {id} = pokemonList[1]; 

    cy.visit('http://localhost:3000/');
    cy.contains(/Next pokémon/i).click()
    cy.contains(/details/i).click()
    cy.location('pathname').should('eq', `/pokemon/${id}`);
  });


  it('Será verificado se na página de detalhes, todas as informações do pokémon estão sendo renderizadas',
  () => {
    const {
      id,
      name, 
      averageWeight: {value, measurementUnit},
      foundAt,
      summary
    } = pokemonList[1]; 

    cy.visit('http://localhost:3000/');
    cy.contains(/Next pokémon/i).click()
    cy.contains(/details/i).click()
    
    cy.contains(name);
    cy.contains(`${value} ${measurementUnit}`);
    cy.contains(summary);
    foundAt.forEach(({location, map}) => {
      cy.contains(location);
      cy.get(`[src="${map}"]`).should('be.visible');
    });
  });
});
