import { GetStaticProps } from 'next';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import MainLayout from '@/ui/layouts/MainLayout';

function Home() {
    return (
        <MainLayout
            title="Pokeapp"
            description="Information about all pokemons"
        >
            Hola
        </MainLayout>
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

export default appWithTranslation(Home);
