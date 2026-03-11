import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo-sm.png';
import _MyNavbar from '../components/_MyNavbar';

const MainLayoutHome = ({ children }) => {
    
    return (
        <main className='position-relative'>
            <_MyNavbar />
            {children}
        </main>
    )
}

export default MainLayoutHome