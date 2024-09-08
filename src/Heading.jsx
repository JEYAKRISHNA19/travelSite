import React from 'react';

import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';


const Heading = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Main />
            <Footer />
        </>
    );
};

export default Heading;
