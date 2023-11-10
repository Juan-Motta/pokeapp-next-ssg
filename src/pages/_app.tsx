import { GetStaticProps } from 'next';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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

export async function getStaticProps({ locale }: StaticProps) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export default appWithTranslation(App);
