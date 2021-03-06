import Head from 'next/head'
import Dashboard from '../src/views/dashboard/Dashboard'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="" />
        <link rel="icon" href="assets/images/favicon.png" />
      </Head>
      <main>
        <Dashboard />
      </main>
    </div>
  )
}

export default Home