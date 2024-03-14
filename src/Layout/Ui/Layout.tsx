import React from 'react'
import { usegetTitleFromRoute } from '../../Hooks/usegetTitleFromRoute'
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatOption from './FloatOption';

const Layout = ({ children ,className=""}: { children: React.ReactNode ,className?: string }) => {
  const location = useLocation();  
  return (
    <>
    <Helmet>
        <title>{usegetTitleFromRoute(location.pathname)}</title>
      </Helmet>
      <div className='Layout'>
     <Header/>
     <FloatOption/>
    <main className={`${className} Layout_Body`}>
        {children}
    </main>
    <Footer/>
 </div>
    </>

  )
}

export default Layout