import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa3">
          <img
            src={
              'https://www.flaticon.com/svg/static/icons/svg/2818/2818147.svg'
            }
            alt="logo"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
