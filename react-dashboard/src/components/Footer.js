import React from 'react';
import '../asset/scss/Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>
        &copy; {currentYear} Assignment By{' '}
        <a href="https://www.linkedin.com/in/ankitao16" target="_blank" rel="noopener noreferrer">
          Ankita♡
        </a></p>
    </div>
  );
};

export default Footer;
