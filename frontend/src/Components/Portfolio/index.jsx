import React, { useState } from 'react';
import portfolioData from '../../db/portfolio.json';
import "./styles.scss"; // Стиль для портфолио
import IMG from "../../assets/images/AllP/portfolio.png";
import { FaRegHeart } from "react-icons/fa";
import { MdRemoveRedEye, MdExpandMore, MdExpandLess } from "react-icons/md";
import CreatePortfolio from './CreateYourOwnPortfolio/index.jsx';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState(portfolioData || []);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const addPortfolio = (newPortfolio) => {
    setPortfolios([...portfolios, newPortfolio]);
  };

  const deletePortfolio = (index) => {
    setPortfolios(portfolios.filter((item, i) => i !== index));
  };

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="portfolio-container">
      <h1>All Portfolios</h1>

      <div className="portfolios">
        {portfolios.map((item, index) => (
          <div className="portfolio" key={index}>
            <img style={{ maxHeight: '188px' }} src={item.image || IMG} alt="" />
            <div className="portfolio-content">
              <button className="delete" onClick={() => deletePortfolio(index)}>Delete This</button>
              <div className='likes'><FaRegHeart /> {item.likes}</div>
              <div className='views'><MdRemoveRedEye /> {item.views}</div>
              {item.description && (
                <div className="description-container">
                  <button className="toggle-description" onClick={() => toggleDescription(index)}>
                    {expandedIndex === index ? <MdExpandLess /> : <MdExpandMore />}
                  </button>
                  {expandedIndex === index && (
                    <>
                      <h3 className="description-title">{item.name}</h3>
                      <p className="description">{item.description}</p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <CreatePortfolio onAddPortfolio={addPortfolio} />
    </div>
  );
};

export default Portfolio;


