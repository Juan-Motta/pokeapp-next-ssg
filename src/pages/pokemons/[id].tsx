import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticPropsContext } from 'next';

import MainLayout from '@/ui/layouts/MainLayout';
import { addPokemons } from '@/services/pokemons/addPokemons';
import { getDetailedPokemon } from '@/services/pokemons/getDetailedPokemon';
import PokemonModal from '@/ui/components/pokemonDetail/PokemonModal';
import { PokemonDetailedBase } from '@/commons/interfaces/pokemonApp';

interface Props {
    pokemon: PokemonDetailedBase;
}

function PokemonDetail({ pokemon }: Props) {
    return (
        <MainLayout
            title="Pokeapp"
            description="Information about all pokemons"
        >
            <PokemonModal pokemon={pokemon}></PokemonModal>
        </MainLayout>
    );
}

interface StaticPaths extends GetStaticPaths {}

export async function getStaticPaths({}: StaticPaths) {
    const pokemons = [...Array(20)].map((value, index) => `${index + 1}`);
    return {
        paths: pokemons.map(id => ({ params: { id } })),
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const _id = parseInt((params as ParsedUrlQuery).id as string);
    const pokemon = await getDetailedPokemon({
        limit: 1,
        offset: 0,
        where_pokemon: { id: { _eq: _id } },
        where_pokemonspeciesflavortexts: { language_id: { _eq: 9 } },
    });
    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
    return {
        props: {
            pokemon,
        },
    };
}

export default PokemonDetail;
