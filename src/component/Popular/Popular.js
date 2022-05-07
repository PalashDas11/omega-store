import React from 'react';
import './Popular.css'
import organic from '../../img/orgin.jpg'
import popular from '../../img/popular.jpg'
import { Link } from 'react-router-dom';


const Popular = () => {
    return (
        <div className="container py-4">
            <h2 className="text-center">Week Spcial offer</h2>
            <div className=" row align-items-center mx-auto">
                <div className="col-sm-12 col-lg-6 col-md-6">
                    <div className="popular-items row mx-auto">
                        <div className="col-sm-12 col-md-12 col-lg-6 text-center">
                            <img src={organic} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 text-center">
                            <h6 className="text-danger">Orginc Foods</h6>
                            <h5 className="mb-4">Exclusive Brand <span className="p text-danger">-30% off</span></h5>
                            <Link to="/inventory" className="custom-btn">Shop Now</Link>
                        </div>

                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-6">
                    <div className="popular-items row mx-auto">
                        <div className="col-sm-12 col-md-12 col-lg-6 text-center">
                            <img src={popular} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-12  col-lg-6 text-center">
                            <h6 className="text-danger">New Arrivals</h6>
                            <h5 className="mb-4">Super sale Vegetable <span className="p text-danger">-20% off</span> </h5>
                            <Link to="/inventory" className="custom-btn">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;