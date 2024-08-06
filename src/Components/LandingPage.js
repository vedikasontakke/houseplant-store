import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Houseplant Store</h1>
      <p>At Houseplant Store, we believe that every home deserves a touch of nature. Founded in 2024, our mission is to provide plant enthusiasts and beginners alike with a curated selection of high-quality houseplants that are both beautiful and easy to care for. Our diverse range of plants includes succulents, flowering varieties, and air-purifying species, each handpicked for their unique charm and health benefits. We are committed to sustainability and source our plants from responsible growers who prioritize eco-friendly practices. Whether you're looking to brighten up your space or find the perfect gift for a loved one, Houseplant Store is your go-to destination for all things green.

</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
