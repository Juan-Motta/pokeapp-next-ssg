import { KeyboardEvent, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

import SearchIcon from '@/ui/icons/SearchIcon';

export default function SearchInput() {
    const inputRef = useRef<HTMLInputElement>(null);
    const { t } = useTranslation('common');

    function onChangeInput(e: KeyboardEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.key !== 'Enter') return;
        inputRef.current && (inputRef.current.value = '');
    }

    return (
        <div className="relative flex items-center justify-end sm:w-1/3 h-100 mx-20 mt-8 sm:mx-0 sm:my-0">
            <input
                type="text"
                className="w-full px-3 py-1 pl-10 text-lg border-2 border-none rounded-lg bg-neutral-200"
                placeholder={t('Insert a name or id')}
                onKeyUp={onChangeInput}
                ref={inputRef}
            />
            <div className="absolute w-6 h-6 fill-none left-2">
                <SearchIcon />
            </div>
        </div>
    );
}
