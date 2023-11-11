import { useTheme } from 'next-themes';
import { useRef } from 'react';

import DarkIcon from '../../icons/DarkIcon';
import LightIcon from '../../icons/LightIcon';

export default function ThemeButton() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const divRef = useRef<HTMLDivElement>(null);

    console.log(resolvedTheme);

    function toggleTheme() {
        if (!divRef.current) return;
        if (theme === 'dark') {
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

    function changeTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    function handleChangeTheme() {
        toggleTheme();
        changeTheme();
    }

    function setInitialStyles() {
        if (!theme) return '';
        if (theme === 'light') {
            return 'bg-yellow-500 text-gray-700';
        } else {
            return 'bg-gray-700 translate-x-[1.75rem] text-white';
        }
    }

    return (
        <div className="h-100 flex items-center">
            <button
                className="px-1 w-[4rem] h-[2.125rem] rounded-full dark:bg-white bg-neutral-200 flex shrink-0 items-center transition duration-300 focus:outline-none shadow"
                onClick={handleChangeTheme}
            >
                <div
                    className={`w-[1.75rem] h-7 relative rounded-full transition duration-500 transform] ${setInitialStyles()}`}
                    ref={divRef}
                >
                    {theme === 'light' ? (
                        <div>
                            <LightIcon
                                width="24"
                                height="24"
                                viewBox="-6 -6 24 24"
                            />
                        </div>
                    ) : (
                        <div className="fill-white">
                            <DarkIcon
                                width="24"
                                height="24"
                                viewBox="-6 -6 24 24"
                            />
                        </div>
                    )}
                </div>
            </button>
        </div>
    );
}
