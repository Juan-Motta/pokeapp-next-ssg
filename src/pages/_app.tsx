import type { AppProps } from 'next/app';

import { ThemeProvider } from '@/commons/providers';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
