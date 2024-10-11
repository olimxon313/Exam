import React from 'react';
import portfolioData from '../../db/portfolio.json';
import "./styles.scss";
import IMG from "../../assets/images/AllP/portfolio.png"
import { FaRegHeart } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";


const Portfolio = () => {
  const portfolio = portfolioData;

  return (
    <div className="portfolio-container">
      <h1>All Portfolios</h1>

      <div className="portfolios">
        <div className="portfolio">
          <img src={IMG} alt="" />
          <div className="portfolio-content">
          <button className="customize">Customize This</button>
          <div className='likes'><FaRegHeart /> 99</div>
          <div className='views'> <MdRemoveRedEye /> 999</div>
          </div>
        </div>
        <div className="portfolio">
          <img src={IMG} alt="" />
          <div className="portfolio-content">
          <button className="customize">Customize This</button>
          <div className='likes'><FaRegHeart /> 99</div>
          <div className='views'> <MdRemoveRedEye /> 999</div>
          </div>
        </div>
        <div className="portfolio">
          <img src={IMG} alt="" />
          <div className="portfolio-content">
          <button className="customize">Customize This</button>
          <div className='likes'><FaRegHeart /> 99</div>
          <div className='views'> <MdRemoveRedEye /> 999</div>
          </div>
        </div>
        <div className="portfolio">
          <img src={IMG} alt="" />
          <div className="portfolio-content">
          <button className="customize">Customize This</button>
          <div className='likes'><FaRegHeart /> 99</div>
          <div className='views'> <MdRemoveRedEye /> 999</div>
          </div>
        </div>
        <div className="portfolio">
          <img src={IMG} alt="" />
          <div className="portfolio-content">
          <button className="customize">Customize This</button>
          <div className='likes'><FaRegHeart /> 99</div>
          <div className='views'> <MdRemoveRedEye /> 999</div>
          </div>
        </div>
        <div className="portfolio">
          <img src={IMG} alt="" />
          <div className="portfolio-content">
          <button className="customize">Customize This</button>
          <div className='likes'><FaRegHeart /> 99</div>
          <div className='views'> <MdRemoveRedEye /> 999</div>
          </div>
        </div>
        <div className="portfolio">
          <img src={IMG} alt="" />
          <div className="portfolio-content">
          <button className="customize">Customize This</button>
          <div className='likes'><FaRegHeart /> 99</div>
          <div className='views'> <MdRemoveRedEye /> 999</div>
          </div>
        </div>
        <div className="portfolio">
          <img src={IMG} alt="" />
          <div className="portfolio-content">
          <button className="customize">Customize This</button>
          <div className='likes'><FaRegHeart /> 99</div>
          <div className='views'> <MdRemoveRedEye /> 999</div>
          </div>
        </div>
        <div className="portfolio">
          <img src={IMG} alt="" />
          <div className="portfolio-content">
          <button className="customize">Customize This</button>
          <div className='likes'><FaRegHeart />  99</div>
          <div className='views'> <MdRemoveRedEye /> 999</div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Portfolio;
