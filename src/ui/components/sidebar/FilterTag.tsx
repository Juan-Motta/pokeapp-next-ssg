import useTranslation from 'next-translate/useTranslation';

interface Props {
    name: string;
    color: string;
    onClick?: (name: string, color: string) => void;
    children?: React.ReactNode;
}

export default function FilterTag({ name, color, onClick, children }: Props) {
    const { t } = useTranslation('common');
    return (
        <div
            className="px-3 py-[2px] rounded-md flex justify-start items-center cursor-pointer hover:brightness-[80%]"
            style={{ backgroundColor: color }}
            onClick={() => {
                onClick && onClick(name, color);
            }}
        >
            <span className="text-white font-bold capitalize mr-2 select-none">
                {t(name)}
            </span>
            {children}
        </div>
    );
}
