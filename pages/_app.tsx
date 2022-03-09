import { useEffect, useState } from 'react';
import Router from 'next/router';
import { Layout } from '../components';
import '../styles/globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

    const [loading, setLoading] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
  }, [])
  
  return (
    <Layout>
        {loading && <div className="lds-facebook"><div></div><div></div><div></div></div>}
        <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
