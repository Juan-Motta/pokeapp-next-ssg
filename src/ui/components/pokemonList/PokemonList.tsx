import { useState } from 'react';

import PokemonCard from './PokemonCard';
import LoadMorePokemonButton from './LoadMorePokemonButton';

import { usePokemonStore } from '@/commons/stores/pokemonStore';

export default function PokemonList() {
    const [pokemons, setPokemons] = useState(
        usePokemonStore.getState().pokemons.slice(0, 20)
    );

    function handleLoad(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setPokemons([
            ...pokemons,
            ...usePokemonStore
                .getState()
                .pokemons.slice(pokemons.length, pokemons.length + 20),
        ]);
    }

    return (
        <section className="mt-14 md:mt-0">
            <ul className="flex flex-wrap mb-10">
                {pokemons.map(pokemon => (
                    <li className="w-full sm:w-1/2 lg:w-1/3" key={pokemon.id}>
                        <div className="mx-2 md:mx-0 md:ml-5">
                            <PokemonCard pokemon={pokemon} />
                        </div>
                    </li>
                ))}
            </ul>
            {pokemons.length < 1009 ? (
                <LoadMorePokemonButton title="Load more" onClick={handleLoad} />
            ) : (
                <> </>
            )}
        </section>
    );
}
