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
    <>
      {loading ? (
        <div className='loading'>
          <div className='loader-container'>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
        ) : (
        <Layout>
          <Component {...pageProps} />
      </Layout>
      )}
    </>
    )
}

export default MyApp
