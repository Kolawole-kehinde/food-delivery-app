
import Navbar from './NavBar';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from './Footer';


const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Banner />
      <Footer />
    </>
  );
};

export default Layout;
