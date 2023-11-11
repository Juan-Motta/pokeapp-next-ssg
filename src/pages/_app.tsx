import { GetStaticProps } from 'next';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@/commons/providers';

import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

interface StaticProps extends GetStaticProps {
    locale: string;
}

export default App;
