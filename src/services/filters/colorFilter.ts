import {
    useFilterStore,
    selectedFilterType,
} from '../../commons/stores/filterStore';

function addColorFilter(name: string, color: string) {
    const selectedFilters = useFilterStore.getState().selectedFilters;
    const setSelectedFilters = useFilterStore.getState().setSelectedFilters;
    const availableColorFilters =
        useFilterStore.getState().availableColorFilters;
    const setAvailableColorFilters =
        useFilterStore.getState().setAvailableColorFilters;
    setSelectedFilters &&
        setSelectedFilters([
            ...selectedFilters,
            { name, color, typeModule: 'color' },
        ]);
    setAvailableColorFilters &&
        setAvailableColorFilters(
            availableColorFilters.filter(filter => filter !== name)
        );
}

function removeColorFilter(
    name: string,
    selectedFilters: selectedFilterType[],
    setSelectedFilters: Function | null
) {
    const availableColorFilters =
        useFilterStore.getState().availableColorFilters;
    const setAvailableColorFilters =
        useFilterStore.getState().setAvailableColorFilters;
    setSelectedFilters &&
        setSelectedFilters(
            selectedFilters.filter(value => value.name !== name)
        );
    setAvailableColorFilters &&
        setAvailableColorFilters([name, ...availableColorFilters]);
}

export { addColorFilter, removeColorFilter };
