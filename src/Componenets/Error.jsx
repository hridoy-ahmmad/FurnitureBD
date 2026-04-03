import React from 'react';
import { useRouteError } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

const Error = () => {
    const error = useRouteError();
    return (

        <div className='flex flex-col min-h-screen '>
            <Nav />
            <div className='flex-1 flex justify-between items-center max-w-7xl mx-auto'>
                {error.message}
            </div>
            <Footer />
        </div>
    );
};

export default Error;