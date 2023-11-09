import { KeyboardEvent, useRef } from 'react';

import SearchIcon from '../icons/SearchIcon';

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
                <div className="w-full sm:w-2/3 text-center sm:text-start">
                    <h1 className="inline text-5xl font-black text-gray-700 cursor-pointer">
                        Pokedex
                    </h1>
                </div>
                <div className="relative flex items-center justify-end sm:w-1/3 h-100 mx-20 mt-8 sm:mx-0 sm:my-0">
                    <input
                        type="text"
                        className="w-full px-3 py-1 pl-10 text-lg border-2 border-none rounded-lg bg-neutral-200"
                        placeholder="Insert a name or id"
                        onKeyUp={onChangeInput}
                        ref={inputRef}
                    />
                    <div className="absolute w-6 h-6 fill-none left-2">
                        <SearchIcon />
                    </div>
                </div>
                <div className="flex flex-col justify-center ml-3">
                    <input
                        type="checkbox"
                        name="light-switch"
                        className="light-switch sr-only"
                    />
                    <label
                        className="relative cursor-pointer p-2"
                        htmlFor="light-switch"
                    >
                        <svg
                            className="dark:hidden"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="fill-slate-300"
                                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                            />
                            <path
                                className="fill-slate-400"
                                d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                            />
                        </svg>
                        <svg
                            className="hidden dark:block"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="fill-slate-400"
                                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                            />
                            <path
                                className="fill-slate-500"
                                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                            />
                        </svg>
                        <span className="sr-only">
                            Switch to light / dark version
                        </span>
                    </label>
                </div>
            </nav>
            <hr />
        </>
    );
}
