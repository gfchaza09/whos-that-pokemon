import React from 'react';

//Styles
import './Footer.styles.css';

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-content'>
            <p>
              {""}
              <a href="https://portfolio-gfchaza.netlify.app" target="_blank" rel='noopener noreferrer'>Gabriel Chazarreta</a>
              - &copy; {new Date().getFullYear()}
              {""}
            </p>
        </div>
    </footer>
  )
};