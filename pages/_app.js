
// import '../src/assets/css/style.css'
import '../src/assets/css/style.scss'
import Layout from '../src/views/layout/Layout'
import { ThemeProvider, createTheme } from '@mui/material/styles';

//import LoginPage from '../src/views/login/LoginPage'

const theme = createTheme();
console.log(theme);

function MyApp({ Component, pageProps, router }) {
  const defaultLayoutPath = ['/account/login/', '/account/register/', '/account/forgot/'];
  if(defaultLayoutPath.includes(router.asPath)){
    return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
  }  
  return(
    <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  ) 
}

export default MyApp
