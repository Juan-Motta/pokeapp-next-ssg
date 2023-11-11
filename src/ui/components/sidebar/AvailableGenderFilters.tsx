import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { BASE_GENDER_COLORS } from '../../../commons/constants/baseGenderColors';
import { useFilterStore } from '../../../commons/stores/filterStore';

import FilterTag from './FilterTag';

import PlusIcon from '@/ui/icons/PlusIcon';
import { addGenderFilter } from '@/services/filters/genderFilter';

export default function AvailableGenderFilters() {
    const [availableGenderFilters, setAvailableGenderFilters] = useState([
        ...Object.keys(BASE_GENDER_COLORS),
    ]);
    const { t } = useTranslation('common');

    useFilterStore.setState({
        availableGenderFilters,
        setAvailableGenderFilters,
    });

    return (
        <div>
            <h1 className="text-xl font-bold mt-5 mb-2 text-gray-700 dark:text-white">
                {t('Gender filters')}
            </h1>
            <div className="flex flex-wrap gap-2">
                {availableGenderFilters.length === 0 ? (
                    <div className="text-neutral-400">
                        {t('No filters left')}
                    </div>
                ) : (
                    useFilterStore
                        .getState()
                        .availableGenderFilters.map(filter => (
                            <FilterTag
                                key={`gender-${filter}`}
                                name={filter}
                                color={
                                    BASE_GENDER_COLORS[
                                        filter as keyof typeof BASE_GENDER_COLORS
                                    ]
                                }
                                onClick={addGenderFilter}
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
