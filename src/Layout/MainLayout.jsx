import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            {/* NavBar--------------- */}
            <Navbar />
            <Outlet />
            {/* Footer---------------- */}
            <Footer />
        </div>
    );
};

export default MainLayout;