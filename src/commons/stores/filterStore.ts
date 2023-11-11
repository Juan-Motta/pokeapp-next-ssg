import { create } from 'zustand';

interface selectedFilterType {
    name: string;
    color: string;
    typeModule: string;
}

interface filterState {
    selectedFilters: selectedFilterType[];
    availableColorFilters: string[];
    availableTypeFilters: string[];
    availableGenderFilters: string[];
    setSelectedFilters: Function | null;
    setAvailableColorFilters: Function | null;
    setAvailableTypeFilters: Function | null;
    setAvailableGenderFilters: Function | null;
}

const useFilterStore = create<filterState>()(set => ({
    selectedFilters: [],
    setSelectedFilters: null,
    availableColorFilters: [],
    setAvailableColorFilters: null,
    availableTypeFilters: [],
    setAvailableTypeFilters: null,
    availableGenderFilters: [],
    setAvailableGenderFilters: null,
}));

export { useFilterStore, type selectedFilterType };
