import { render, screen } from '@testing-library/react';
import App from '../App';
import Pokedex from '../components/Pokedex';
import Pokemon from '../components/Pokemon';
import pokemonList from '../data';

describe('1 - Crie o componente `<Pokedex />`', () => {
  it('O componente `<Pokedex />` renderiza uma tag `h1` com o texto `Pokédex`', () => {
    render(<Pokedex />);
    
    const titleElement = screen.getByRole('heading', { level: 1, name: "Pokédex" });
    expect(titleElement).toBeInTheDocument();
  });

  it('O componente `<Pokedex />` renderiza uma tag `ul`', () => {
    render(<Pokedex />);
    
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it('O componente `<Pokedex />` é renderizado no `App.js`', () => {
    render(<App />);
    
    const titleText = screen.getByText("Pokédex");
    expect(titleText).toBeInTheDocument();
  });
});

describe('2 - Crie o componente `<Pokemon />`', () => {
  it('Será verificado se o componente possui a tag `li` envolvendo seu conteúdo', () => {
    const pikachuInfo = pokemonList[0];
    render(<Pokemon pokemon={pikachuInfo} />);
    
    const pokemonItem = screen.getByRole('listitem');
    expect(pokemonItem).toBeInTheDocument();
  });

  it('Será verificado se o componente renderiza as informações corretamente', () => {
    const pikachuInfo = pokemonList[0];
    render(<Pokemon pokemon={pikachuInfo} />);
    
    const { name, type, image, averageWeight: { value, measurementUnit } } = pikachuInfo;
    
    const pokemonName = screen.getByText(name);
    const pokemonType = screen.getByText(type);
    const pokemonImage = screen.getByAltText(name);
    const pokemonWeight = screen.getByText(`${value} ${measurementUnit}`);
    

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonImage.src).toBe(image);
  });
});

describe('3 - Renderize uma lista com as informações de cada pokémon', () => {
  it('Será validado se o componente `<Pokedex />` renderiza a quantidade correta de elementos', () => {
    render(<Pokedex pokemonList={pokemonList} />);
    const pokemonCards = screen.getAllByRole("listitem");

    expect(pokemonCards.length).toBe(pokemonList.length);
  });

  it('Será validado se todos os elementos da lista são renderizados', () => {
    render(<App />);
    
    pokemonList.forEach(({name}) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  })
});
