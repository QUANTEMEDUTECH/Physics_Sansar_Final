import React from 'react';
import './organization.css';
import bgImage from './bg-image.png';
import educationGif from './Education.gif';

const JoinUsComponent = () => {
  return (
    <div className="outer_join">
      <div className="info_join">
        <img src={bgImage} className="bg-image" alt="Background" />
        <h2>Come Join Us</h2>
        <h1>Let's strengthen education for a better future!</h1>
        <p className="p1">
          Together, we can increase the power of education via innovation.
          Let's fuel the exponential growth of education with unending knowledge.
        </p>
        <p className="p2">Opportunities await for educators, developers.</p>
        <div className="butn_join">
          <span>
            <a href="------------" target="_blank" rel="noopener noreferrer">
              Join Us
            </a>
          </span>
        </div>
      </div>

      <div className="team_join">
        <img src={educationGif} className="team_img" alt="Education Team" />
      </div>
    </div>
  );
};

export default JoinUsComponent;
