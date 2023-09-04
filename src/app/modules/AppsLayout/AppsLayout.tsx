import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

/**  COMBINE LAYOUT APPS ADA DISINI */
function AppsLayout() {
    return (

        <div>
            <Header />
            <div
                className='container mt-2 pb-3 pt-2'>
                <Outlet />
            </div>
        </div>
    );
}

export default AppsLayout;
