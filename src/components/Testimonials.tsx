import React from 'react';

const testimonials = [
    {
        name: "Alice Johnson",
        feedback: "DUTA CNARYY has the best canaries! My new pet is so lively and beautiful.",
        rating: 5
    },
    {
        name: "Bob Smith",
        feedback: "Excellent service and a wide variety of canaries. Highly recommend!",
        rating: 4
    },
    {
        name: "Catherine Lee",
        feedback: "I love my canary from DUTA CNARYY! The staff was very helpful.",
        rating: 5
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-list">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="feedback">"{testimonial.feedback}"</p>
                        <p className="customer-name">- {testimonial.name}</p>
                        <p className="rating">Rating: {testimonial.rating} stars</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;