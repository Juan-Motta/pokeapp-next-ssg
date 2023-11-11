import { useState } from 'react';

import { BASE_COLORS } from '../../../commons/constants/baseColors';
import { useFilterStore } from '../../../commons/stores/filterStore';

import FilterTag from './FilterTag';

import PlusIcon from '@/ui/icons/PlusIcon';
import { addColorFilter } from '@/services/filters/colorFilter';

export default function AvailableColorFilters() {
    const [availableColorFilters, setAvailableColorFilters] = useState([
        ...Object.keys(BASE_COLORS),
    ]);

    useFilterStore.setState({
        availableColorFilters,
        setAvailableColorFilters,
    });

    return (
        <div>
            <h1 className="text-xl font-bold mt-5 mb-2 text-gray-700 dark:text-white">
                Color filters
            </h1>
            <div className="flex flex-wrap gap-2">
                {availableColorFilters.length === 0 ? (
                    <div className="text-neutral-400">No filters left</div>
                ) : (
                    useFilterStore
                        .getState()
                        .availableColorFilters.map(filter => (
                            <FilterTag
                                key={`color-${filter}`}
                                name={filter}
                                color={
                                    BASE_COLORS[
                                        filter as keyof typeof BASE_COLORS
                                    ]
                                }
                                onClick={addColorFilter}
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
