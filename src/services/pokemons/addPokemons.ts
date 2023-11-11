import { Pokemon } from '@/commons/interfaces/pokemons';
import { usePokemonStore } from '@/commons/stores/pokemonStore';

function addPokemons(pokemons: Pokemon[]) {
    usePokemonStore.setState({
        pokemons,
    });
}

export { addPokemons };
