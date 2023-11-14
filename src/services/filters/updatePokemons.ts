import { PokemonBase } from '@/commons/interfaces/pokemonApp';
import { selectedFilterType } from '@/commons/stores/filterStore';
import { usePokemonStore } from '@/commons/stores/pokemonStore';

function updatePokemonFilters(selectedFilters: selectedFilterType[]) {
    const oldPokemons = usePokemonStore.getState().originalPokemons;
    let newPokemons: PokemonBase[] = [...oldPokemons];
    for (let filter of selectedFilters) {
        if (filter.typeModule === 'type') {
            newPokemons = newPokemons.filter(pokemon =>
                pokemon.types.includes(filter.name)
            );
        }
        if (filter.typeModule === 'color') {
            newPokemons = newPokemons.filter(
                pokemon => pokemon.color === filter.name
            );
        }
    }
    usePokemonStore.setState({ pokemons: newPokemons });
    const setPokemons = usePokemonStore.getState().setPokemons;
    setPokemons && setPokemons(newPokemons.slice(0, 20));
}

export { updatePokemonFilters };
