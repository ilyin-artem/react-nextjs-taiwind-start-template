import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, ButtonLink } from '../components/Button/Button';
import { Container } from '../components/Button/Container/Container';

const Home: NextPage = () => {
    return (
        <div className="flex flex-col justify-center items-center py-2 min-h-screen">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Container>
                    <Button>Button</Button>
                    <ButtonLink href="" variant="outline">
                        Link
                    </ButtonLink>
                </Container>
            </main>
        </div>
    );
};

export default Home;
