import React from 'react';

interface ProductCardProps {
    image: string;
    price: number;
    age: string;
    type: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, price, age, type }) => {
    return (
        <div className="product-card">
            <img src={image} alt={`${type} canary`} className="product-image" />
            <div className="product-info">
                <h3 className="product-type">{type}</h3>
                <p className="product-age">Age: {age}</p>
                <p className="product-price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;