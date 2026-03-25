import React from 'react';
import _MyNavbar from '../components/_MyNavbar';
import CookieBanner from '../components/CookieBanner';


const MainLayout = ({ children }) => {

    return (
        <main className='position-relative'>
            <_MyNavbar />
            <div className='navSpacer'></div>
            {children}
            <CookieBanner/>
        </main>
    )
}

export default MainLayout