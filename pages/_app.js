import Layout from '../components/Layout'
import '../styles/fonts.css'
import '../styles/normalize.css'
import '../styles/milligram.min.css'
import '../styles/custom.css'
import React from 'react'
import { AppProps } from 'next/app'
import SuperTokensReact from 'supertokens-auth-react'
import { frontendConfig } from '../config/frontendConfig'

if (typeof window !== 'undefined') {
  SuperTokensReact.init(frontendConfig())
}

function MyApp({ Component, pageProps }){
  return (
          <Layout>
            <Component {...pageProps}></Component>
          </Layout>
  ) 
}

export default MyApp