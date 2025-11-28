export async function getPokemonInfo(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const result = await response.json();

    const habilidadesDetalhadas = await Promise.all(
      result.abilities.map(async (h) => {
        const res = await fetch(h.ability.url);
        const abilityData = await res.json();

        const descricao =
          abilityData.effect_entries.find((e) => e.language.name === "en")
            ?.effect || "Descrição não disponível";

        return {
          nome: h.ability.name,
          descricao,
        };
      })
    );

    return {
      nome: result.name,
      tipo: result.types.map((t) => t.type.name),
      imagem: result.sprites.front_default,
      movimentos: result.moves.map((m) => m.move.name),
      habilidades: habilidadesDetalhadas,
    };
  } catch (error) {
    console.error("❌ Erro ao buscar informações do Pokémon:", error);
    throw error;
  }
}
