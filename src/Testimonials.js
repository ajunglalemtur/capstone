import React from "react";
import "./styles.css";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    rating: "⭐⭐⭐⭐⭐",
    review: "Absolutely loved the food! The Greek salad was fresh and delicious.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Smith",
    rating: "⭐⭐⭐⭐",
    review: "Great atmosphere and friendly staff. Bruschetta was amazing!",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    rating: "⭐⭐⭐⭐⭐",
    review: "Best lemon dessert I’ve ever had! Will definitely come back.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
            <h3>{testimonial.name}</h3>
            <p className="rating">{testimonial.rating}</p>
            <p>"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
