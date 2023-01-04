import React from 'react';
import './Footer.css'; // Import CSS file
import config from '../config'; // Import config file

const Footer = () => (
  <div className="footer">
    <p>Copyright &copy; {config.communityName}</p>
  </div>
);

export default Footer;