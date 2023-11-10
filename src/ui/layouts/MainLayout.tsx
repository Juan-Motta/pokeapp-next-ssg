import Head from 'next/head';

import { Navbar } from '../components/navbar';

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
                <main>{children}</main>
            </div>
        </>
    );
}
