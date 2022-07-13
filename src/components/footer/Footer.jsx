import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'



export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Waleed</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testmonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Waleed Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}
