import { useRouter } from 'next/router';

export default function NavbarTitle() {
    const { locale, locales, push, pathname } = useRouter();

    function redirectHome() {
        push('/');
    }

    return (
        <div className="w-full sm:w-2/3 text-center sm:text-start">
            <h1
                onClick={redirectHome}
                className="select-none inline text-5xl font-black text-gray-700 cursor-pointer dark:text-white"
            >
                Pokedex
            </h1>
        </div>
    );
}
