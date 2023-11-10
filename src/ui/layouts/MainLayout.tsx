import Head from 'next/head';

import { Navbar } from '../components/navbar';
import { Sidebar } from '../components/sidebar';
import { PokemonList } from '../components/pokemonList';

interface Props {
    children: React.ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
}

export default function MainLayout({
    children,
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
            </Head>
            <div className="container mx-auto overflow-hidden">
                <Navbar />
                <main className="flex flex-col sm:flex-row sm:gap-14 sm:mt-10 mt-7 mx-10 sm:mx-0">
                    <div className="w-100 sm:w-[30%] md:w-[25%]">
                        <Sidebar />
                    </div>
                    <div className="w-100 sm:w-[70%] md:w-[75%]">
                        <PokemonList />
                    </div>
                </main>
            </div>
        </>
    );
}
