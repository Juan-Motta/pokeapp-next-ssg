import { PokemonBase } from '@/commons/interfaces/pokemonApp';
import { usePokemonStore } from '@/commons/stores/pokemonStore';

function addPokemons(pokemons: PokemonBase[]) {
    usePokemonStore.setState({
        originalPokemons: pokemons,
        pokemons,
    });
}

export { addPokemons };
