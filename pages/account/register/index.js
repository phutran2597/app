import Head from 'next/head'
import Register from '../../../src/views/login/Register'

const RegisterPage = () => {
  return (
    <div>
      <Head>
        <title>Register Page</title>
        <meta name="description" content="" />
        <link rel="icon" href="assets/images/favicon.png" />
      </Head>
      <main>
        <Register />
      </main>
    </div>
  )
}

export default RegisterPage