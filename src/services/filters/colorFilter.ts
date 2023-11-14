import { useFilterStore } from '../../commons/stores/filterStore';

import { updatePokemonFilters } from './updatePokemons';

function addColorFilter(name: string, color: string) {
    // update selected filters
    const oldSelectedFilters = useFilterStore.getState().selectedFilters;
    const setSelectedFilters = useFilterStore.getState().setSelectedFilters;
    const newSelectedFilters = [
        ...oldSelectedFilters,
        { name, color, typeModule: 'color' },
    ];
    setSelectedFilters && setSelectedFilters(newSelectedFilters);
    // update available filters
    const oldAvailableColorFilters =
        useFilterStore.getState().availableColorFilters;
    const setAvailableColorFilters =
        useFilterStore.getState().setAvailableColorFilters;
    const newAvailableColorFilters = oldAvailableColorFilters.filter(
        filter => filter !== name
    );
    setAvailableColorFilters &&
        setAvailableColorFilters(newAvailableColorFilters);
    updatePokemonFilters(newSelectedFilters);
}

function removeColorFilter(name: string) {
    // remove filter from selected filters
    const setSelectedFilters = useFilterStore.getState().setSelectedFilters;
    const oldSelectedFilters = useFilterStore.getState().selectedFilters;
    const newSelectedFilters = oldSelectedFilters.filter(
        value => value.name !== name
    );
    setSelectedFilters && setSelectedFilters(newSelectedFilters);
    // update available filters
    const oldAvailableColorFilters =
        useFilterStore.getState().availableColorFilters;
    const newAvailableColorFilters = [name, ...oldAvailableColorFilters];
    const setAvailableColorFilters =
        useFilterStore.getState().setAvailableColorFilters;
    setAvailableColorFilters &&
        setAvailableColorFilters(newAvailableColorFilters);
    // update pokemons
    updatePokemonFilters(newSelectedFilters);
}

export { addColorFilter, removeColorFilter };
