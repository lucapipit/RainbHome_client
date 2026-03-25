import React from 'react';
import _MyNavbar from '../components/_MyNavbar';
import CookieBanner from '../components/CookieBanner';

const MainLayoutHome = ({ children }) => {
    
    return (
        <main className='position-relative'>
            <_MyNavbar />
            {children}
            <CookieBanner/>
        </main>
    )
}

export default MainLayoutHome