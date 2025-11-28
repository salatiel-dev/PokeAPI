import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { usePokemons } from "../hooks/UsePokemons";
import { searchPokemonByName } from "../api/searchPokemon";
import SearchBar from "../components/SearchBar";
import { ToggleThemeButton } from "../components/ToggleThemeButton";

function PokemonHome() {
  const {
    pokemonData,
    loading,
    fetchPokemons,
    offset,
    setOffset,
    setPokemonData,
  } = usePokemons();
  const [searchTerm, setSearchTerm] = useState("");

  async function handleSearchPokemon() {
    if (searchTerm.trim() === "") {
      fetchPokemons(10, 0);
      return;
    }

    const resultado = await searchPokemonByName(searchTerm);
    setPokemonData(resultado);
  }

  return (
    <>
      <ToggleThemeButton />

      <Main>
        <h1>Bem-vindo ao Universo Pokémon!</h1>

        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={handleSearchPokemon}
        />

        <Div>
          {pokemonData.map((pokemon) => (
            <StyledLink to={`/pokemon/${pokemon.nome}`} key={pokemon.id}>
              <PokeInfo>
                <p>{pokemon.nome}</p>
                <img
                  src={pokemon.imagem}
                  alt={`Imagem do Pokémon ${pokemon.nome}`}
                />
              </PokeInfo>
            </StyledLink>
          ))}
        </Div>

        <LoadButton
          onClick={() => {
            const newOffset = offset + 10;
            setOffset(newOffset);
            fetchPokemons(10, newOffset);
          }}
          disabled={loading}
        >
          {loading ? "Carregando..." : "Carregar mais"}
        </LoadButton>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.layout.backgroundColor};
  color: ${({ theme }) => theme.layout.textColor};
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const PokeInfo = styled.div`
  background-color: ${({ theme }) => theme.card.backgroundColor};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.card.borderColor};
  padding: 10px;
  text-align: center;
  width: 120px;
  color: ${({ theme }) => theme.card.textColor};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.card.textColor};
`;

const LoadButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.card.borderColor};
  color: ${({ theme }) => theme.card.textColor};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(1.2);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default PokemonHome;
