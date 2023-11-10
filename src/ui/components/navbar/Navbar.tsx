import { KeyboardEvent, useRef } from 'react';

import ThemeButton from './ThemeIcon';
import SearchInput from './SearchInput';
import NavbarTitle from './NavbarTitle';

export default function Navbar() {
    const inputRef = useRef<HTMLInputElement>(null);

    function onChangeInput(e: KeyboardEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.key !== 'Enter') return;
        inputRef.current && (inputRef.current.value = '');
    }

    return (
        <>
            <nav className="flex mt-8 mb-8 flex-col sm:flex-row">
                <NavbarTitle />
                <SearchInput />
                <ThemeButton />
            </nav>
            <hr className="dark:border-gray-600 sm:mx-0 mx-10" />
        </>
    );
}
