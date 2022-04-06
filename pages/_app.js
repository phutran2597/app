// import '../src/assets/css/style.css'
import '../src/assets/css/style.scss'
import Layout from '../src/views/layout/layout'
import LoginPage from '../src/views/login/LoginPage'

function MyApp({ Component, pageProps, router }) {
  if(router.asPath === '/'){
    return <LoginPage />
  }  
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
