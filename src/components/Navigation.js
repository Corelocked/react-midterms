import React, { useState } from 'react';
import './Navigation.css';

function Navigation() {
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav>
            <ul>
                <li>
                    <a 
                        href="#home" 
                        className={activeLink === 'home' ? 'active' : ''} 
                        onClick={() => handleLinkClick('home')}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href="#about" 
                        className={activeLink === 'about' ? 'active' : ''} 
                        onClick={() => handleLinkClick('about')}
                    >
                        About Us
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact" 
                        className={activeLink === 'contact' ? 'active' : ''} 
                        onClick={() => handleLinkClick('contact')}
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
