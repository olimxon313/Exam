import React, { useState, useEffect } from "react";
import portfolioData from '../../db/portfolio.json';
import IMG from "../../assets/Images/RecentUsers/userPerson.png"
import "./style.scss";

const Community = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(portfolioData.users);
  }, []);

  return (
    <div className="community">
      <h1>Community</h1>
      <div className="profiles">
        {users.map((user) => (
          <div className="profile-card" key={user.id}>
            <p>{user.description}</p>
            <div className="profile-stats">
              <span>Portfolios {user.portfolios}</span>
              <span>&#128065; {user.views}</span>
              <span>Followers {user.followers}</span>
            </div>
            <div className="profile-info">
              <img src={IMG} />
              <span>{user.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;

