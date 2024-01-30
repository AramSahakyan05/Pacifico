import './EmailInput.scss';
import "../../../index.css";
import { useState } from 'react';
import { useEffect } from 'react';

const EmailInput = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    // Update window height when the component mounts
    useEffect(() => {
      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };
  
      // Attach the event listener when the component mounts
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    console.log(windowHeight);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;;
            setIsScrolled(scrollPosition > 4180);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    return (
        <div className="email-input">
            <div className="email-input-title">
                    <h2>Seen enough? We are currently in the closed beta.<br /> Please enter your email to join the waiting list.</h2>
            </div>
            <form className={`input-btn ${isScrolled ? "scrolled-form" : ""}`}>
                <input type="email" placeholder="Enter Your Email Address"/>
                <button className="btn">GET STARTED</button>
            </form>
        </div>
    )
}

export default EmailInput;