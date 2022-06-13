import Layout from '../components/Layout'
import '../styles/fonts.css'
import '../styles/normalize.css'
import '../styles/milligram.css'
import '../styles/custom.css'

function MyApp({ Component, pageProps }) {
  return (
          <Layout>
            <Component {...pageProps}></Component>
          </Layout>
  ) 
}

export default MyApp