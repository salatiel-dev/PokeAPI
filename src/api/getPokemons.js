// Essa função só busca os dados e retorna
export async function getPokemons(limit = 10, offset = 0) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();

  const pokemons = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const details = await res.json();

      return {
        id: details.id,
        nome: details.name,
        imagem: details.sprites.front_default,
      };
    })
  );

  return pokemons;
}
