import React from 'react';
import PropTypes from 'prop-types'
import './styles/NavaigationBar.scss'


interface Props {
  logo: string;
  descriptionLogo: string;
  firstMenuLink: string;
  secondMenuLink: string;
  thirdMenuLink: string;
  
}

function NavigationBar({ logo, descriptionLogo, firstMenuLink, secondMenuLink, thirdMenuLink }: Props) {
  
  return (
    <div id="navbar">
      <div id="navbar-left">
        <img id="logo" src={logo} alt={descriptionLogo} />
      </div>

      <div id="navbar-right">
        <ul id="navbar-list">
          <li className="navbar-item">
            <a>{firstMenuLink}</a>
          </li>
          <li className="navbar-item">
            <a>{secondMenuLink}</a>
          </li>
          <li className="navbar-item">
            <a>{thirdMenuLink}</a>
          </li>
        </ul>
      </div>
        
    </div>
  );
}

NavigationBar.propTypes = {
  logo: PropTypes.string,
  descriptionLogo: PropTypes.string,
  firstMenuLink: PropTypes.string,
  secondMenuLink: PropTypes.string,
  thirdMenuLink: PropTypes.string,
};

export default NavigationBar;