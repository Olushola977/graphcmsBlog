import React, { useEffect } from 'react';
import { Header } from './'
import { Footer } from './';

const Layout = ({children}) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
        <script src="https://code.responsivevoice.org/responsivevoice.js?key=xf0f53u4"></script>
    </>
  )
}

export default Layout