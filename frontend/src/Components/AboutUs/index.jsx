import React, { useEffect, useRef } from "react";
import Olimkhon from "../../assets/Images/AboutUs/Olimkhon.jpg";
import "./style.scss";

const AboutUs = () => {
  const teamMemberRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = teamMemberRef.current.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      const rotateX = (deltaY / height) * 10;
      const rotateY = (-deltaX / width) * 10;

      teamMemberRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      teamMemberRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    const teamMember = teamMemberRef.current;

    teamMember.addEventListener('mousemove', handleMouseMove);
    teamMember.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      teamMember.removeEventListener('mousemove', handleMouseMove);
      teamMember.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="about-us">
      <div className="container">
        <h1>About Us</h1>
        <p className="about-description">
          Welcome to <span>Click Craft</span>! We specialize in creating modern, dynamic, and 
          user-friendly web experiences. Whether you're a developer looking to showcase your work 
          or a designer wanting to expand your portfolio, we provide the perfect platform.
        </p>
        <div className="team">
          <h2>Meet Our Founder</h2>
          <div className="team-member" ref={teamMemberRef}>
            <div className="member-info">
              <img src={Olimkhon} alt="Olimkhon" className="team-image" />
              <h3>Olimkhon</h3>
              <p>Founder & Full Stack Developer</p>
            </div>
            <p className="member-bio">
              Olimkhon is a visionary full stack developer with a passion for building intuitive, 
              scalable, and high-performance web applications. With years of experience in the tech 
              industry, he founded Click Craft to help others bring their creative visions to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
