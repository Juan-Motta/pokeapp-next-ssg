import { StaticImageData } from 'next/image';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { PokemonBase } from '@/commons/interfaces/pokemonApp';
import PokeballIcon from '@/ui/icons/PokeballIcon';
import { BASE_COLORS } from '@/commons/constants/baseColors';

interface Props {
    pokemon: PokemonBase;
}

export default function PokemonCard({ pokemon }: Props) {
    const { t } = useTranslation('common');
    function formatUrl(): string | StaticImageData {
        let url: string | StaticImageData = '';
        if (pokemon.id < 1000) {
            url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(
                pokemon.id
            ).padStart(3, '0')}.png`;
        } else if (pokemon.id >= 1000 && pokemon.id < 1010) {
            url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`;
        }
        return url;
    }

    return (
        <div
            className="relative flex flex-col mb-5 border-2 border-none rounded-xl overflow-hidden"
            style={{ backgroundColor: BASE_COLORS[pokemon.color] }}
        >
            <div className="z-10 cursor-pointer">
                <div className="flex flex-row justify-between px-3 pt-3 ">
                    <h2 className="text-lg font-bold text-white capitalize">
                        {pokemon.name}
                    </h2>
                    <span className="text-lg font-bold text-white">
                        #{String(pokemon.id).padStart(3, '0')}
                    </span>
                </div>
                <div className="flex flex-row justify-between px-3 my-3 ">
                    <div className="flex flex-col w-1/2 pt-4 pr-4 h-100">
                        {pokemon.types.map(type => (
                            <span
                                key={type}
                                className="px-2 py-1 mb-1 text-white rounded-md"
                                style={{
                                    backgroundColor: '#FFFFFF40',
                                }}
                            >
                                {t(type)}
                            </span>
                        ))}
                    </div>
                    <div className="w-1/2 ">
                        <Image
                            src={formatUrl()}
                            alt={pokemon.name}
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </div>
            <PokeballIcon />
        </div>
    );
}
