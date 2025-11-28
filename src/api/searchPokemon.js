export async function searchPokemonByName(name) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    if (!response.ok) {
      throw new Error("Pokémon não encontrado");
    }

    const data = await response.json();
    return [
      {
        id: data.id,
        nome: data.name,
        imagem: data.sprites.front_default,
      },
    ];
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    return [];
  }
}
