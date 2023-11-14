import { useRouter } from 'next/router';
import Image, { StaticImageData } from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { BASE_COLORS } from '@/commons/constants/baseColors';
import { PokemonDetailedBase } from '@/commons/interfaces/pokemonApp';
import { BASE_TYPE_COLORS } from '@/commons/constants/baseTypeColors';
import WeightIcon from '@/ui/icons/WeightIcon';
import RulerIcon from '@/ui/icons/RulerIcon';

interface Props {
    pokemon: PokemonDetailedBase;
}
export default function PokemonModal({ pokemon }: Props) {
    const { push } = useRouter();
    const { t } = useTranslation('common');
    function handleoutsideClick() {
        push('/');
    }

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
            onClick={handleoutsideClick}
            className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
        >
            <section
                onClick={e => {
                    e.stopPropagation();
                }}
                className="z-30 flex flex-col w-100 lg:w-1/2 xl:w-1/3 rounded-md"
                style={{ backgroundColor: BASE_COLORS[pokemon.color] }}
            >
                <div className="flex justify-between px-10 pt-8">
                    <h2 className="text-3xl font-bold text-white capitalize">
                        {pokemon.name}
                    </h2>
                    <span className="text-3xl font-bold text-white">
                        #{String(pokemon.id).padStart(3, '0')}
                    </span>
                </div>
                <div className="z-10 flex justify-center w-full pb-4">
                    <Image
                        src={formatUrl()}
                        alt={pokemon.name}
                        width={150}
                        height={150}
                    />
                </div>
                <div className="pt-16 m-2 -mt-20 bg-white rounded-md">
                    {/* Types */}
                    <div className="flex justify-center">
                        <div className="flex gap-2 h-100">
                            {pokemon.types.map(type => (
                                <span
                                    key={type}
                                    className="px-2 py-1 mb-1 text-white rounded-md"
                                    style={{
                                        backgroundColor:
                                            BASE_TYPE_COLORS[
                                                type as keyof typeof BASE_TYPE_COLORS
                                            ],
                                    }}
                                >
                                    {t(type)}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col my-5">
                        <span
                            className="mx-auto text-xl font-bold capitalize"
                            style={{
                                color: BASE_COLORS[
                                    pokemon.color as keyof typeof BASE_COLORS
                                ],
                            }}
                        >
                            {t('about')}
                        </span>
                        <hr className="mx-6 mt-3" />
                    </div>
                    <div className="mx-6 mb-5 text-neutral-500">
                        <p>{pokemon.description}</p>
                    </div>
                    <div className="flex mb-5">
                        <div className="flex flex-col items-center justify-end w-1/3">
                            <div className="flex gap-2 my-auto">
                                <WeightIcon width={'28'} height={'28'} />
                                <span className="text-neutral-500">
                                    {(pokemon.weight * 0.1).toFixed(1)} kg
                                </span>
                            </div>
                            <div className="flex mt-1">
                                <span className="mx-auto text-neutral-500">
                                    {t('weight')}
                                </span>
                            </div>
                        </div>
                        <div className="border-[1px] border-neutral-200 mt-1 mb-3"></div>
                        <div className="flex flex-col items-center justify-end w-1/3">
                            <div className="flex justify-center gap-2 my-auto text-neutral-500">
                                <RulerIcon width={'24'} height={'24'} />
                                <div>{pokemon.height * 10} cm</div>
                            </div>
                            <div className="flex mt-1">
                                <span className="mx-auto text-neutral-500">
                                    {t('height')}
                                </span>
                            </div>
                        </div>
                        <div className="border-[1px] border-neutral-200 mt-1 mb-3"></div>
                        <div className="flex flex-col justify-end w-1/3">
                            <div className="flex flex-col my-auto">
                                {pokemon.abilities.map(ability => {
                                    return (
                                        <span
                                            key={ability.name}
                                            className="mx-auto text-neutral-500"
                                        >
                                            {ability.name}
                                        </span>
                                    );
                                })}
                            </div>
                            <div className="flex mt-1">
                                <span className="mx-auto text-neutral-500">
                                    {t('abilities')}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-5">
                        <span
                            className="mx-auto text-xl font-bold capitalize"
                            style={{
                                color: BASE_COLORS[
                                    pokemon.color as keyof typeof BASE_COLORS
                                ],
                            }}
                        >
                            {t('base stats')}
                        </span>
                        <hr className="mx-6 mt-3" />
                    </div>
                    <div className="flex mx-5 mb-5">
                        <div className="flex flex-col pr-5">
                            <span
                                className="font-bold"
                                style={{
                                    color: BASE_COLORS[
                                        pokemon.color as keyof typeof BASE_COLORS
                                    ],
                                }}
                            >
                                HP
                            </span>
                            <span
                                className="font-bold"
                                style={{
                                    color: BASE_COLORS[
                                        pokemon.color as keyof typeof BASE_COLORS
                                    ],
                                }}
                            >
                                ATK
                            </span>
                            <span
                                className="font-bold"
                                style={{
                                    color: BASE_COLORS[
                                        pokemon.color as keyof typeof BASE_COLORS
                                    ],
                                }}
                            >
                                DEF
                            </span>
                            <span
                                className="font-bold"
                                style={{
                                    color: BASE_COLORS[
                                        pokemon.color as keyof typeof BASE_COLORS
                                    ],
                                }}
                            >
                                SATK
                            </span>
                            <span
                                className="font-bold"
                                style={{
                                    color: BASE_COLORS[
                                        pokemon.color as keyof typeof BASE_COLORS
                                    ],
                                }}
                            >
                                SDEF
                            </span>
                            <span
                                className="font-bold"
                                style={{
                                    color: BASE_COLORS[
                                        pokemon.color as keyof typeof BASE_COLORS
                                    ],
                                }}
                            >
                                SPD
                            </span>
                        </div>
                        <div className="border-[1px] border-neutral-200 mt-1 mb-1"></div>
                        <div className="flex flex-col justify-around w-full ml-5 h-100">
                            {pokemon.stats.map(stat => {
                                return (
                                    <div
                                        key={stat.name}
                                        className="flex items-center gap-5"
                                    >
                                        <span className="text-neutral-400">
                                            {String(stat.base_stat).padStart(
                                                3,
                                                '0'
                                            )}
                                        </span>
                                        <div
                                            key={stat.base_stat}
                                            className="w-full h-2 bg-gray-200 rounded-full "
                                        >
                                            <div
                                                className="h-2 rounded-full"
                                                style={{
                                                    width: `${
                                                        (stat.base_stat * 100) /
                                                        255
                                                    }%`,
                                                    backgroundColor:
                                                        BASE_COLORS[
                                                            pokemon.color as keyof typeof BASE_TYPE_COLORS
                                                        ],
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
