import React from 'react';
import './globals.css';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header>
                <nav>
                    <h1>DUTA CNARYY</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;