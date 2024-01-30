import './Header.css';
import CONFIG from '../../config';
import { Nav } from './nav/Nav';
import { useState, useEffect } from 'react';


export function Header() {
    const { navConfig } = CONFIG;
    const [isFixed, setIsFixed] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsFixed(scrollPosition > 500);
        setIsScrolled(scrollPosition > 500);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isFixed ? "fixed-header" : ""}`}>
            <div className="logo">
                <h1>Pacifico</h1>
            </div>
        <Nav config={navConfig} isScrolled={isScrolled}/>
        </header>
    );
}