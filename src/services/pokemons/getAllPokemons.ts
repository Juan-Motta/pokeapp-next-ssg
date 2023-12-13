import { request } from 'graphql-request';

import query from '../../commons/graphql/queries/getAllPokemonsSimplified';

import { Pokemon } from '@/commons/interfaces/pokemonApi';

interface QueryParams {
    limit?: number;
    offset?: number;
}

interface ApiResponse {
    pokemons: Pokemon[];
}

interface Response {
    id: number;
    name: string;
    types: string[];
}

async function getAllPokemons(args: QueryParams = {}): Promise<Response[]> {
    const variables = { ...args };
    const response = (await request(
        'https://beta.pokeapi.co/graphql/v1beta',
        query,
        variables
    )) as ApiResponse;
    const simplifiedresponse =
        response &&
        response.pokemons.map(pokemon => ({
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types.map(type => type.type.name),
            color: pokemon.specy.color.name,
        }));
    return simplifiedresponse as Response[];
}

export { getAllPokemons };
