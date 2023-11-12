import { create } from 'zustand';

import { PokemonBase } from '../interfaces/pokemonApp';

interface pokemonState {
    pokemons: PokemonBase[];
}

const usePokemonStore = create<pokemonState>()(set => ({
    pokemons: [],
}));

export { usePokemonStore, type pokemonState };
