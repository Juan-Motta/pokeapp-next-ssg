import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { useFilterStore } from '../../../commons/stores/filterStore';

import FilterTag from './FilterTag';

import CloseIcon from '@/ui/icons/CloseIcon';
import { removeSelectedFilter } from '@/services/filters/selectedFilter';

export function SelectedFilters() {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const { t } = useTranslation('common');

    useFilterStore.setState({ selectedFilters, setSelectedFilters });

    return (
        <div>
            <h1 className="text-xl font-bold mb-2 text-gray-700 dark:text-white">
                {t('Selected filters')}
            </h1>
            <div className="flex flex-wrap gap-2">
                {selectedFilters.length === 0 ? (
                    <div className="text-neutral-400">
                        {t('No filters selected')}
                    </div>
                ) : (
                    useFilterStore.getState().selectedFilters.map(filter => (
                        <FilterTag
                            key={`selected-${filter.typeModule}-${filter.name}`}
                            name={filter.name}
                            color={filter.color}
                            onClick={removeSelectedFilter}
                        >
                            <CloseIcon
                                stroke="white"
                                strokeWidth="4"
                                width="10"
                                height="10"
                                viewBox="0 0 14 14"
                            />
                        </FilterTag>
                    ))
                )}
            </div>
        </div>
    );
}
