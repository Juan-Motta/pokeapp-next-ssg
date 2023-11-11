import {
    useFilterStore,
    selectedFilterType,
} from '../../commons/stores/filterStore';

function addGenderFilter(name: string, color: string) {
    const selectedFilters = useFilterStore.getState().selectedFilters;
    const setSelectedFilters = useFilterStore.getState().setSelectedFilters;
    const availableGenderFilters =
        useFilterStore.getState().availableGenderFilters;
    const setAvailableGenderFilters =
        useFilterStore.getState().setAvailableGenderFilters;
    setSelectedFilters &&
        setSelectedFilters([
            ...selectedFilters,
            { name, color, typeModule: 'gender' },
        ]);
    setAvailableGenderFilters &&
        setAvailableGenderFilters(
            availableGenderFilters.filter(filter => filter !== name)
        );
}

function removeGenderFilter(
    name: string,
    selectedFilters: selectedFilterType[],
    setSelectedFilters: Function | null
) {
    const availableGenderFilters =
        useFilterStore.getState().availableGenderFilters;
    const setAvailableGenderFilters =
        useFilterStore.getState().setAvailableGenderFilters;
    setSelectedFilters &&
        setSelectedFilters(
            selectedFilters.filter(value => value.name !== name)
        );
    setAvailableGenderFilters &&
        setAvailableGenderFilters([name, ...availableGenderFilters]);
}

export { addGenderFilter, removeGenderFilter };
