
import Nav from '../Componenets/Nav';
import { Outlet } from 'react-router';
import Footer from '../Componenets/Footer';

const RootLayout = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Nav />
            <div className='flex-1'>
                <Outlet  />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;