import { request } from 'graphql-request';

import query from '../../commons/graphql/queries/getAllPokemons';

import { Pokemon } from '@/commons/interfaces/pokemons';

interface QueryParams {
    limit?: number;
    offset?: number;
}

interface Response {
    pokemons: Pokemon[];
}

async function getAllPokemons(args: QueryParams = {}): Promise<Response> {
    const variables = { ...args };
    const response = await request(
        'https://beta.pokeapi.co/graphql/v1beta',
        query,
        variables
    );
    return response as Response;
}

export { getAllPokemons };
