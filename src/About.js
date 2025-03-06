import React from "react";
import "./styles.css";
import Adrian from "./images/adrian.jpg"; // Add an image of Adrian
import Mario from "./images/mario.jpg"; // Add an image of Mario

const About = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant located in Chicago. 
          We are dedicated to bringing traditional recipes with a modern twist to our customers. 
          Founded by Adrian and Mario, our restaurant offers fresh, delicious, and authentic meals.
        </p>
      </div>
      <div className="about-images">
        <img src={Adrian} alt="Adrian, Co-founder" className="about-img" />
        <img src={Mario} alt="Mario, Co-founder" className="about-img" />
      </div>
    </section>
  );
};

export default About;
