import React from 'react';
import Footer from '../molecules/Footer';
import Header from '../molecules/Header';
import Form from '../organisms/Form';

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <main className="d-flex flex-column justify-content-center ">
                <div className="w-100" align="center">
                    <Form />
                </div>
                <div className="m-3" align="center">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;