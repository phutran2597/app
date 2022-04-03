import Head from "next/head";
import HomePage from "../../src/views/home/HomePage";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="" />
                <link rel="icon" href="assets/images/favicon.png" />
            </Head>
            <main>
                <HomePage />
            </main>
        </div>
    )
}

export default Home;