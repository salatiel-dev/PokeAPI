import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonInfo } from "../api/getPokemonsInfo";
import styled from "styled-components";
import { ToggleThemeButton } from "../components/ToggleThemeButton";

const PokemonInfos = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonInfo(name);
      setPokemon(data);
    }
    fetchData();
  }, [name]);

  const typeColors = {
    normal: "#DAD7C7",
    fire: "#FDD9C1",
    water: "#C2E0F9",
    electric: "#FDF3B4",
    grass: "#D4F5C0",
    ice: "#D7F2F4",
    fighting: "#E8C1B5",
    poison: "#E5C9F4",
    ground: "#F2E2B9",
    flying: "#E0D6F9",
    psychic: "#F9C6D2",
    bug: "#E7F4C1",
    rock: "#E8D8A0",
    ghost: "#E3D9F5",
    dragon: "#D8C8F7",
    dark: "#D1C7C0",
    steel: "#DADAE3",
    fairy: "#F8D6E7",
  };

  return (
    <>
      <ToggleThemeButton />
      <Section>
        <h1>Pokedéx</h1>
        {!pokemon ? (
          <p>carregando...</p>
        ) : (
          <PokemonDetails>
            <PokemonHeader
              style={{ backgroundColor: typeColors[pokemon.tipo[0]] }}
            >
              <P>
                <strong>{pokemon.nome}</strong>!
              </P>
              <ImagemPokemon
                src={pokemon.imagem}
                alt={`imagem do pokemon ${pokemon.nome}`}
              />
            </PokemonHeader>

            <Type>
              Sua tipagem principal é{" "}
              {pokemon.tipo.slice(0, 1).map((index) => index)}
            </Type>

            <h3>Primeiros 4 moves</h3>
            <ul>
              {pokemon.movimentos.slice(0, 4).map((index) => (
                <li key={index}>{index}</li>
              ))}
            </ul>

            <h3>Habilidades principais</h3>
            <ul>
              {pokemon.habilidades.slice(0, 2).map((h) => (
                <li key={h.nome}>
                  <strong>{h.nome}</strong>: {h.descricao}
                </li>
              ))}
            </ul>

            <br />
            <StyledLink to="/">
              <strong>⬅ Voltar para a Pokédex</strong>
            </StyledLink>
          </PokemonDetails>
        )}
      </Section>
    </>
  );
};

const P = styled.p`
  color: black;
`;

const PokemonHeader = styled.div`
  border-radius: 10px;
`;

const ImagemPokemon = styled.img`
  width: 100%;
`;

const Type = styled.p`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 0.5px solid ${({ theme }) => theme.layout.textColor};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.card.textColor};
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.layout.backgroundColor};
  color: ${({ theme }) => theme.layout.textColor};
  padding: 40px 20px;
  min-height: 100vh;
  width: 100%;
`;

const PokemonDetails = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  border: 1px solid ${({ theme }) => theme.card.borderColor};
  color: ${({ theme }) => theme.card.textColor};
  padding: 10px;
  width: 15%;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export default PokemonInfos;
