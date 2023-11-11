interface Props {
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function LoadMorePokemonButton({ title, onClick }: Props) {
    return (
        <div className="flex justify-center">
            <button
                className="z-10 px-10 py-2 mb-16 text-2xl font-bold border-2 border-gray-700 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-700 text-neutral-700 rounded-xl hover:bg-gray-700 hover:border-gray-700 hover:text-white"
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    );
}
