import Head from 'next/head'
import Login from '../../../src/views/login/Login'

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="" />
        <link rel="icon" href="assets/images/favicon.png" />
      </Head>
      <main>
        <Login />
      </main>
    </div>
  )
}

export default LoginPage