import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'



const Hero = () => {
    return (
        <div className="banner d-flex align-items-center ps-3 ">
            <div>
                <span>EXCLUSIVE OFFER -20% OFF</span>
                <h1>A Different kind of grocery store</h1>
                <span>Only this week. Don't miss....</span>
                <p>from <span className="text-danger h3">$7.99</span></p>
            
                    <Link to="/" className="custom-btn">Shop now
                    </Link>
                
            </div>

        </div>
    );
};

export default Hero;