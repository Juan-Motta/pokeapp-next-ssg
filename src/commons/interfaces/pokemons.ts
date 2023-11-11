export interface Type {
    id: number;
    name: string;
}

export interface Type {
    type: Type;
}

export interface Effect {
    description: string;
}

export interface Ability {
    name: string;
    id: number;
    effects: Effect[];
}

export interface Ability {
    ability: Ability;
}

export interface State {
    name: string;
}

export interface Stat {
    base_stat: number;
    state: State;
}

export interface Color {
    id: number;
    name: string;
}

export interface Pokemon {
    id: number;
    name: string;
    evolves_from_species_id?: any;
}

export interface Evolution {
    pokemons: Pokemon[];
}

export interface Egggroup {
    name: string;
}

export interface Egggroup {
    egggroup: Egggroup;
}

export interface Pokemon_v2_version {
    id: number;
}

export interface Description {
    flavor_text: string;
    pokemon_v2_version: Pokemon_v2_version;
}

export interface Specy {
    color: Color;
    evolution: Evolution;
    gender_rate: number;
    egggroups: Egggroup[];
    description: Description[];
}

export interface Pokemon {
    name: string;
    id: number;
    types: Type[];
    abilities: Ability[];
    stats: Stat[];
    specy: Specy;
    height: number;
    weight: number;
}

export interface Data {
    pokemons: Pokemon[];
}

export interface RootObject {
    data: Data;
}
