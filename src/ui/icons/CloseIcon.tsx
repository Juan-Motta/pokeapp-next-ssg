interface Props {
    width?: string;
    height?: string;
    viewBox?: string;
    stroke?: string;
    strokeWidth?: string;
    fill?: string;
    strokeLinecap?: 'round' | 'inherit' | 'butt' | 'square' | undefined;
    strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel' | undefined;
}

export default function CloseIcon({
    width = '14',
    height = '14',
    viewBox = '0 0 14 14',
    stroke = 'currentColor',
    strokeWidth = '2',
    fill = 'none',
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
}: Props) {
    return (
        <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            height={height}
            width={width}
        >
            <path
                stroke={stroke}
                strokeLinecap={strokeLinecap}
                strokeLinejoin={strokeLinejoin}
                strokeWidth={strokeWidth}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
        </svg>
    );
}
