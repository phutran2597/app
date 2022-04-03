import Head from 'next/head'
import LoginPage from '../src/views/login/LoginPage'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="assets/images/favicon.png" />
      </Head>
      <main>
        <LoginPage />
      </main>
    </div>
  )
}

export default Home