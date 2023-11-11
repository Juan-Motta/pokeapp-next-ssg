import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { BASE_TYPE_COLORS } from '../../../commons/constants/baseTypeColors';
import { useFilterStore } from '../../../commons/stores/filterStore';

import FilterTag from './FilterTag';

import PlusIcon from '@/ui/icons/PlusIcon';
import { addTypeFilter } from '@/services/filters/typeFilter';

export default function AvailableTypeFilters() {
    const [availableTypeFilters, setAvailableTypeFilters] = useState([
        ...Object.keys(BASE_TYPE_COLORS),
    ]);
    const { t } = useTranslation('common');

    useFilterStore.setState({ availableTypeFilters, setAvailableTypeFilters });

    return (
        <div>
            <h1 className="text-xl font-bold mt-5 mb-2 text-gray-700 dark:text-white">
                {t('Type filters')}
            </h1>
            <div className="flex flex-wrap gap-2">
                {availableTypeFilters.length === 0 ? (
                    <div className="text-neutral-400">
                        {t('No filters left')}
                    </div>
                ) : (
                    useFilterStore
                        .getState()
                        .availableTypeFilters.map(filter => (
                            <FilterTag
                                key={`type-${filter}`}
                                name={filter}
                                color={
                                    BASE_TYPE_COLORS[
                                        filter as keyof typeof BASE_TYPE_COLORS
                                    ]
                                }
                                onClick={addTypeFilter}
                            >
                                <PlusIcon
                                    stroke="white"
                                    strokeWidth="4.5"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 18 18"
                                />
                            </FilterTag>
                        ))
                )}
            </div>
        </div>
    );
}
