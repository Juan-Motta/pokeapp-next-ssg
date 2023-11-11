import {
    useFilterStore,
    selectedFilterType,
} from '../../commons/stores/filterStore';

function addTypeFilter(name: string, color: string) {
    const selectedFilters = useFilterStore.getState().selectedFilters;
    const setSelectedFilters = useFilterStore.getState().setSelectedFilters;
    const availableTypeFilters = useFilterStore.getState().availableTypeFilters;
    const setAvailableTypeFilters =
        useFilterStore.getState().setAvailableTypeFilters;
    setSelectedFilters &&
        setSelectedFilters([
            ...selectedFilters,
            { name, color, typeModule: 'type' },
        ]);
    setAvailableTypeFilters &&
        setAvailableTypeFilters(
            availableTypeFilters.filter(filter => filter !== name)
        );
}

function removeTypeFilter(
    name: string,
    selectedFilters: selectedFilterType[],
    setSelectedFilters: Function | null
) {
    const availableTypeFilters = useFilterStore.getState().availableTypeFilters;
    const setAvailableTypeFilters =
        useFilterStore.getState().setAvailableTypeFilters;
    setSelectedFilters &&
        setSelectedFilters(
            selectedFilters.filter(value => value.name !== name)
        );
    setAvailableTypeFilters &&
        setAvailableTypeFilters([name, ...availableTypeFilters]);
}

export { addTypeFilter, removeTypeFilter };
