import React from "react";
import "./styles.css";
import greekSaladImage from "./images/greek-salad.jpg";
import lemonDessertImage from "./images/lemon-dessert.jpg"; // ✅ Unique name
import bruschettaImage from "./images/bruschetta.png"; // ✅ Unique name

const specials = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "Crispy lettuce, peppers, olives, and Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greekSaladImage, 
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$5.99",
    description:
      "Grilled bread smeared with garlic and seasoned with salt and olive oil.",
    image: bruschettaImage,
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "A traditional recipe from grandma's cookbook, made with the freshest ingredients.",
    image: lemonDessertImage,
  },
];

const Main = () => {
  return (
    <main className="specials-section">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <button className="menu-btn">Online Menu</button>
      </div>
      <div className="specials-container">
  {specials.map((dish) => (
    <div className="special-card" key={dish.id}>
      <img src={dish.image} alt={dish.name} />
      <div className="special-info">
        <h3>{dish.name} <span className="price">{dish.price}</span></h3>
        <p>{dish.description}</p>
        <button className="order-btn">Order a delivery 🚀</button>
      </div>
    </div>
  ))}
</div>

    </main>
  );
};

export default Main;
