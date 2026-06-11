import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';
import { products } from '../lib/data';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <section className="product-list">
                <h2>Our Premium Canaries</h2>
                <div className="products">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
            <Testimonials />
        </div>
    );
};

export default HomePage;