import { GetStaticProps } from 'next';

import { getAllPokemons } from '@/services/pokemons/getAllPokemons';
import MainLayout from '@/ui/layouts/MainLayout';
import { PokemonBase } from '@/commons/interfaces/pokemonApp';
import { addPokemons } from '@/services/pokemons/addPokemons';

interface Props {
    pokemons: PokemonBase[];
}
function Home({ pokemons }: Props) {
    addPokemons(pokemons);

    return (
        <MainLayout
            title="Pokeapp"
            description="Information about all pokemons"
        ></MainLayout>
    );
}

interface StaticProps extends GetStaticProps {}

export async function getStaticProps({}: StaticProps) {
    // 1009 is the last pokemon defined with image in the api
    const pokemons = await getAllPokemons({ limit: 1009 });
    return {
        props: {
            pokemons,
        },
    };
}

export default Home;
