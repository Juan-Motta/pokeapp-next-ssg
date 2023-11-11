import { GetStaticProps } from 'next';

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

export default Home;
