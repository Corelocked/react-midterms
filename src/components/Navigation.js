import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom'; 

function Navigation() {
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className={activeLink === 'home' ? 'active' : ''} 
                        onClick={() => handleLinkClick('home')}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className={activeLink === 'about' ? 'active' : ''} 
                        onClick={() => handleLinkClick('about')}
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className={activeLink === 'contact' ? 'active' : ''} 
                        onClick={() => handleLinkClick('contact')}
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
