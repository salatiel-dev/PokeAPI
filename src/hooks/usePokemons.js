import { getPokemons } from "../api/getPokemons";
import { useEffect, useState } from "react";

export function usePokemons() {
    const [pokemonData, setPokemonData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    async function fetchPokemons(limit = 10, offsetValue = 0) {
        try {
            setLoading(true);
            const pokemons = await getPokemons(limit, offsetValue);
            setPokemonData((prev) => [...prev, ...pokemons]);
        } catch (error) {
            console.error("❌ Erro ao buscar pokémons:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemons(10, 0);
    }, []);

   return { pokemonData, setPokemonData, loading, fetchPokemons, offset, setOffset };

}

