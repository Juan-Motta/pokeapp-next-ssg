import { useTheme } from 'next-themes';

import DarkIcon from '../../icons/DarkIcon';
import LightIcon from '../../icons/LightIcon';

export default function ThemeButton() {
    const { theme, setTheme } = useTheme();

    function handleChangeTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <div className="flex mt-8 sm:mt-0 sm:flex-col justify-center ml-3">
            <input
                type="checkbox"
                name="light-switch"
                className="light-switch sr-only"
            />
            <label className="relative cursor-pointer" htmlFor="light-switch">
                <div
                    className="bg-gray-700 fill-white hover:bg-yellow-500 hover:fill-gray-700 h-8 w-8 rounded-md justify-center items-center dark:flex hidden transition ease-in-out delay-100"
                    onClick={handleChangeTheme}
                >
                    <DarkIcon width="24" height="24" viewBox="-4 -4 24 24" />
                </div>
                <div
                    className="bg-yellow-500 fill-gray-700 h-8 w-8 rounded-md flex justify-center items-center dark:hidden hover:bg-gray-700 hover:fill-yellow-500 transition ease-in-out delay-100"
                    onClick={handleChangeTheme}
                >
                    <LightIcon width="24" height="24" viewBox="-4 -4 24 24" />
                </div>
                <span className="sr-only">Switch to light / dark version</span>
            </label>
        </div>
    );
}
