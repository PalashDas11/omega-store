import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faCoffee, faRightLong, } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'
import banner from '../../img/banner.jpg'



const Hero = () => {
    return (
        <div className="banner">
            <img src={banner} alt="" srcset="" />

            <div className='banner-content-wrap'>
                <div className='container banner-content'>
                    <span>EXCLUSIVE OFFER -20% OFF</span>
                    <h1>A Different kind of grocery store</h1>
                    <span>Only this week. Don't miss....</span>
                    <p>from <span className="text-danger h3">$7.99</span></p>

                    <Link to="/inventory" className="custom-btn ">
                        Shop now
            
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Hero;