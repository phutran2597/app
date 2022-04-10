import Head from 'next/head'
import ForgotPassword from '../../../src/views/login/ForgotPassword'

const ForgotPage = () => {
  return (
    <div>
      <Head>
        <title>Forgot Page</title>
        <meta name="description" content="" />
        <link rel="icon" href="assets/images/favicon.png" />
      </Head>
      <main>
        <ForgotPassword />
      </main>
    </div>
  )
}

export default ForgotPage