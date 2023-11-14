import { request } from 'graphql-request';

import query from '../../commons/graphql/queries/getAllPokemons';

import { Pokemon } from '@/commons/interfaces/pokemonApi';

interface QueryParams {
    limit: number;
    offset: number;
    where_pokemon: { id: { _eq: number } };
    where_pokemonspeciesflavortexts: { language_id: { _eq: number } };
}

interface ApiResponse {
    pokemons: Pokemon[];
}

interface Response {
    id: number;
    name: string;
    types: string[];
}

async function getDetailedPokemon(args: QueryParams) {
    const variables = { ...args };

    const response = (await request(
        'https://beta.pokeapi.co/graphql/v1beta',
        query,
        variables
    )) as ApiResponse;
    const simplifiedResponse =
        response &&
        response.pokemons.map(pokemon => ({
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types.map(type => type.type.name),
            color: pokemon.specy.color.name,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities.map(({ ability }) => ({
                name: ability.name,
                description: ability.effects[0].description,
            })),
            stats: pokemon.stats.map(stat => ({
                name: stat.state.name,
                base_stat: stat.base_stat,
            })),
            evolutions: pokemon.specy.evolution.pokemons.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                pre_evolution_id: pokemon.evolves_from_species_id,
            })),
            male_rate:
                pokemon.specy.gender_rate === -1
                    ? 0
                    : 1 - pokemon.specy.gender_rate / 8,
            female_rate:
                pokemon.specy.gender_rate === -1
                    ? 0
                    : pokemon.specy.gender_rate / 8,
            egg_groups: pokemon.specy.egggroups.map(
                egggroup => egggroup.egggroup.name
            ),
            description: pokemon.specy.description[0].flavor_text,
        }));
    if (simplifiedResponse.length > 0) {
        return simplifiedResponse[0];
    } else {
        return null;
    }
}

export { getDetailedPokemon };
