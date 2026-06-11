import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Welcome to DUTA CNARYY</h1>
                <p>Your premium destination for beautiful canaries.</p>
                <button className="cta-button">Shop Now</button>
            </div>
            <div className="hero-image">
                <img src="/path-to-your-image.jpg" alt="Beautiful Canaries" />
            </div>
        </div>
    );
};

export default Hero;