import { create } from 'zustand';

import { PokemonBase } from '../interfaces/pokemonApp';

interface pokemonState {
    originalPokemons: PokemonBase[];
    pokemons: PokemonBase[];
    setPokemons: Function | null;
}

const usePokemonStore = create<pokemonState>()(set => ({
    originalPokemons: [],
    pokemons: [],
    setPokemons: null,
}));

export { usePokemonStore, type pokemonState };
