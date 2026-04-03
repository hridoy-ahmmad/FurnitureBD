import React from 'react';
import { BarLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <BarLoader
                color="#835107"
                speedMultiplier={2}
            />
        </div>
    );
};

export default Loading;