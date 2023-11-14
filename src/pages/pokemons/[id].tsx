import { ParsedUrlQuery } from 'querystring';

import {
    GetStaticPaths,
    GetStaticPathsContext,
    GetStaticPropsContext,
} from 'next';

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

export async function getStaticPaths(props: GetStaticPathsContext) {
    const pokemons = [...Array(20)].map((value, index) => `${index + 1}`);
    return {
        paths: pokemons.map(id => ({ params: { id } })),
        fallback: 'blocking',
    };
}

export async function getStaticProps(props: GetStaticPropsContext) {
    const _id = parseInt((props.params as ParsedUrlQuery).id as string);
    const _lang = props.locale === 'en' ? 9 : 7;

    const pokemon = await getDetailedPokemon({
        limit: 1,
        offset: 0,
        where_pokemon: { id: { _eq: _id } },
        where_pokemonspeciesflavortexts: { language_id: { _eq: _lang } },
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
