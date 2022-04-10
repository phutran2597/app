
// import '../src/assets/css/style.css'
import '../src/assets/css/style.scss'
import Layout from '../src/views/layout/Layout'
//import LoginPage from '../src/views/login/LoginPage'

function MyApp({ Component, pageProps, router }) {
  const defaultLayoutPath = ['/account/login/', '/account/register/', '/account/forgot/'];
  if(defaultLayoutPath.includes(router.asPath)){
    return <Component {...pageProps} />
  }  
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
