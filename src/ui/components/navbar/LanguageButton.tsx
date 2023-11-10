import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function LanguageButton() {
    const { locale, locales, push, pathname } = useRouter();
    const divRef = useRef<HTMLDivElement>(null);

    function toggleLanguage() {
        if (!divRef.current) return;

        if (locale === 'es') {
            divRef.current.classList.remove(
                'bg-gray-700',
                'translate-x-[1.75rem]'
            );
            divRef.current.classList.add('bg-yellow-500');
        } else {
            divRef.current.classList.add(
                'bg-gray-700',
                'translate-x-[1.75rem]'
            );
            divRef.current.classList.remove('bg-yellow-500');
        }
    }

    function changeLanguage() {
        push(pathname, pathname, { locale: locale === 'en' ? 'es' : 'en' });
    }

    function handleChangeLanguage() {
        changeLanguage();
        toggleLanguage();
    }

    function setInitialStyles() {
        if (!locale) return '';
        if (locale === 'es') {
            return 'bg-yellow-500';
        } else {
            return 'bg-gray-700 translate-x-[1.75rem]';
        }
    }

    return (
        <div className="h-100 flex items-center">
            <button
                onClick={handleChangeLanguage}
                className="px-1 w-[4rem] h-[2.125rem] rounded-full dark:bg-white bg-neutral-200 flex shrink-0 items-center transition duration-100 focus:outline-none shadow"
            >
                <div
                    className={`text-sm font-bold flex justify-center items-center dark:bg-gray-700 w-[1.75rem] h-7 relative rounded-full transition duration-300 transform bg-yellow-500 ${setInitialStyles()}`}
                    ref={divRef}
                >
                    {locale === 'es' ? <span>ES</span> : <span>EN</span>}
                </div>
            </button>
        </div>
    );
}
