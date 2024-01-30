import React from 'react'
import "./Footer.scss";
import { FaTwitter, FaPinterest, FaFacebookF, FaInstagram, FaSkype } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-inner-context'>
            <h4>Copyright © 2018 Pacifico. Designed by <a href="#epicThemes">Epic-Themes</a></h4>
            <div className='footer-inner-context-icons'>
                <FaTwitter />
                <FaPinterest />
                <FaFacebookF />
                <FaInstagram />
                <FaSkype />
            </div>
        </div>
    </footer>
  )
}

export default Footer
