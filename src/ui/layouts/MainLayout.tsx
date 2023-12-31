import Head from 'next/head';

import { Navbar } from '../components/navbar';
import { Sidebar } from '../components/sidebar';
import { PokemonList } from '../components/pokemonList';

interface Props {
    children?: React.ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
}

const origin =
    typeof window === 'undefined' ? '' : (window as any).location.origin;

export default function MainLayout({
    children = null,
    title,
    description,
    keywords,
    image,
}: Props): React.ReactNode {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Juan Motta" />
                <meta
                    name="description"
                    content={`Information about pokemon ${title}`}
                />
                <meta
                    name="keywords"
                    content={`${title}, pokemon, pokedex, pokeapp, pokeapi`}
                />
                <meta property="og:title" content="Pokeapp" />
                <meta
                    property="og:description"
                    content="Get info about all pokemons from 1st to 9th generation."
                />
                <meta
                    property="og:image"
                    content={`${origin}/pokemon_mini.webp`}
                />
            </Head>
            <div className="container mx-auto overflow-hidden px-5">
                <Navbar />
                <main className="flex flex-col md:flex-row md:gap-10 md:mt-10 mt-7 mx-5 md:mx-0">
                    <div className="w-100 md:w-[30%] lg:w-[25%]">
                        <Sidebar />
                    </div>
                    <div className="w-100 md:w-[70%] lg:w-[75%]">
                        <PokemonList />
                    </div>
                    <div>{children}</div>
                </main>
            </div>
        </>
    );
}
