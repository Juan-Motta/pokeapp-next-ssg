import { PokemonBase } from '@/commons/interfaces/pokemonApp';
import { usePokemonStore } from '@/commons/stores/pokemonStore';

function searchPokemon(value: string) {
    const pokemons = usePokemonStore.getState().pokemons;
    let pokemon: PokemonBase | null | undefined = null;
    if (isNaN(parseInt(value))) {
        pokemon = pokemons.find(
            pokemon => pokemon.name === value.toLowerCase()
        );
    } else {
        pokemon = pokemons.find(pokemon => pokemon.id === parseInt(value));
    }
    const setPokemon = usePokemonStore.getState().setPokemons;
    if (pokemon) {
        setPokemon && setPokemon([pokemon]);
    } else {
        setPokemon && setPokemon([]);
    }
}

export { searchPokemon };
