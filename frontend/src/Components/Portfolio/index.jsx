import React from 'react';
import portfolioData from '../../db/portfolio.json'; 
import "./styles.scss";
import IMG from "../../assets/images/AllP/portfolio.png"

const Portfolio = () => {
  const portfolio = portfolioData; 

  return (
    <div className="portfolio-container">
      <h1 align="center">All Portfolios</h1>

      <div className="porfolios">
        <img src={IMG} alt="" />
        .
      </div>
    </div>
        
  );
};

export default Portfolio;
