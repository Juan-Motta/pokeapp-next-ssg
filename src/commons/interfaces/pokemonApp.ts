export interface PokemonBase {
    id: number;
    name: string;
    types: string[];
    color: string;
}

export interface PokemonDetailedBase {
    id: number;
    name: string;
    types: string[];
    color: string;
    height: number;
    weight: number;
    abilities: {
        name: string;
        description: string;
    }[];
    stats: {
        name: string;
        base_stat: number;
    }[];
    evolutions: {
        id: number;
        name: string;
        pre_evolution_id: number;
    }[];
    male_rate: number;
    female_rate: number;
    egg_groups: string[];
    description: string;
}
