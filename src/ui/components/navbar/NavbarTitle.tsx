import { useRouter } from 'next/router';

import { usePokemonStore } from '@/commons/stores/pokemonStore';
import { useFilterStore } from '@/commons/stores/filterStore';
import { BASE_COLORS } from '@/commons/constants/baseColors';
import { BASE_GENDER_COLORS } from '@/commons/constants/baseGenderColors';
import { BASE_TYPE_COLORS } from '@/commons/constants/baseTypeColors';

export default function NavbarTitle() {
    const { locale, locales, push, pathname } = useRouter();

    function redirectHome() {
        push('/');
    }

    function cleanStore() {
        const setSelectedFilters = useFilterStore.getState().setSelectedFilters;
        setSelectedFilters && setSelectedFilters([]);
        const setAvailableColorFilters =
            useFilterStore.getState().setAvailableColorFilters;
        setAvailableColorFilters &&
            setAvailableColorFilters([...Object.keys(BASE_COLORS)]);
        const setAvailableGenderFilters =
            useFilterStore.getState().setAvailableGenderFilters;
        setAvailableGenderFilters &&
            setAvailableGenderFilters([...Object.keys(BASE_GENDER_COLORS)]);
        const setAvailableTypeFilters =
            useFilterStore.getState().setAvailableTypeFilters;
        setAvailableTypeFilters &&
            setAvailableTypeFilters([...Object.keys(BASE_TYPE_COLORS)]);
        const pokemons = usePokemonStore.getState().originalPokemons;
        const setPokemons = usePokemonStore.getState().setPokemons;
        setPokemons && setPokemons(pokemons.slice(0, 20));
    }

    function handleClick() {
        cleanStore();
        redirectHome();
    }

    return (
        <div className="w-full sm:w-2/3 text-center sm:text-start">
            <h1
                onClick={handleClick}
                className="select-none inline text-5xl font-black text-gray-700 cursor-pointer dark:text-white"
            >
                Pokedex
            </h1>
        </div>
    );
}
