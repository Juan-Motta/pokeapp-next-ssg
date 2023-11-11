import { useFilterStore } from '../../commons/stores/filterStore';

import { removeColorFilter } from './colorFilter';
import { removeGenderFilter } from './genderFilter';
import { removeTypeFilter } from './typeFilter';

function removeSelectedFilter(name: string) {
    const selectedFilters = useFilterStore.getState().selectedFilters;
    const setSelectedFilters = useFilterStore.getState().setSelectedFilters;
    const filter = selectedFilters.find(filter => filter.name === name);
    if (filter && filter.typeModule === 'type') {
        removeTypeFilter(name, selectedFilters, setSelectedFilters);
    }
    if (filter && filter.typeModule === 'color') {
        removeColorFilter(name, selectedFilters, setSelectedFilters);
    }
    if (filter && filter.typeModule === 'gender') {
        removeGenderFilter(name, selectedFilters, setSelectedFilters);
    }
}

export { removeSelectedFilter };
