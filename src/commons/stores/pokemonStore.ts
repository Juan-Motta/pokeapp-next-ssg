import { create } from 'zustand';

import { Pokemon } from '../interfaces/pokemons';

interface pokemonState {
    pokemons: Pokemon[];
}

const usePokemonStore = create<pokemonState>()(set => ({
    pokemons: [],
}));

export { usePokemonStore, type pokemonState };
