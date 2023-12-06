import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

/**  COMBINE LAYOUT APPS ADA DISINI */
function AppsLayout() {
    return (

        <div>
            <Header />
            <div
                className='container mt-2 pb-3 pt-2 container-layout'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default AppsLayout;
