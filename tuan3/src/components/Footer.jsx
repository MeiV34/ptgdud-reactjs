import React from "react";
import logoWhite from "../assets/logo-white.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left footer-section about">
          <div className="">
            <h3>About Us</h3>
            <p>
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className="subscribe">
              <input type="email" placeholder="Enter your email" />
              <button>Send</button>
            </div>
          </div>
          <div className="certificate">
            <img  style={{ width: '30%', paddingRight: '20px', fontSize: "11px"
             }} src={logoWhite} alt={logoWhite} />
            <p>2023 Chefify Company</p>
            <p>
              <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>

        {/* Learn More Section */}
        <div className="footer-right">
          <div className="footer-section first-content-right">
            <div className="section-learnmore">
              <h3>Learn More</h3>
              <ul>
                <li>Our Cooks</li>
                <li>See Our Features</li>
                <li>FAQ</li>
              </ul>
            </div>

            <h3>Shop</h3>
            <ul>
              <li>Git Subscription</li>
              <li>Send Us Feedback </li>
            </ul>
          </div>

          {/* Shop Section */}
          <div className="footer-section">
            <h3>Recipes</h3>
            <ul>
              <li>What to Cook This Week</li>
              <li>Pasta</li>
              <li>Dinner</li>
              <li>Healthy</li>
              <li>Vegetarian</li>
              <li>Vegan</li>
              <li>Christmas</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
