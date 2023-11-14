import { useFilterStore } from '../../commons/stores/filterStore';

import { updatePokemonFilters } from './updatePokemons';

function addTypeFilter(name: string, color: string) {
    // update selected filters
    const oldSelectedFilters = useFilterStore.getState().selectedFilters;
    const setSelectedFilters = useFilterStore.getState().setSelectedFilters;
    const newSelectedFilters = [
        ...oldSelectedFilters,
        { name, color, typeModule: 'type' },
    ];
    setSelectedFilters && setSelectedFilters(newSelectedFilters);
    // update available filters
    const oldAvailableTypeFilters =
        useFilterStore.getState().availableTypeFilters;
    const setAvailableTypeFilters =
        useFilterStore.getState().setAvailableTypeFilters;
    const newAvailableTypeFilters = oldAvailableTypeFilters.filter(
        filter => filter !== name
    );
    setAvailableTypeFilters && setAvailableTypeFilters(newAvailableTypeFilters);
    updatePokemonFilters(newSelectedFilters);
}

function removeTypeFilter(name: string) {
    // remove filter from selected filters
    const setSelectedFilters = useFilterStore.getState().setSelectedFilters;
    const oldSelectedFilters = useFilterStore.getState().selectedFilters;
    const newSelectedFilters = oldSelectedFilters.filter(
        value => value.name !== name
    );
    setSelectedFilters && setSelectedFilters(newSelectedFilters);
    // update available filters
    const oldAvailableTypeFilters =
        useFilterStore.getState().availableTypeFilters;
    const newAvailableFilters = [name, ...oldAvailableTypeFilters];
    const setAvailableTypeFilters =
        useFilterStore.getState().setAvailableTypeFilters;
    setAvailableTypeFilters && setAvailableTypeFilters(newAvailableFilters);
    // update pokemons
    updatePokemonFilters(newSelectedFilters);
}

export { addTypeFilter, removeTypeFilter };
