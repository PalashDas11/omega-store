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
            {/* another on  */}
            <div className="row  mx-auto py-4">
                <div className="d-flex align-items-center justify-content-around col-sm-12 col-md-4 col-lg-3">
                    <div>
                        <img src="https://htmldemo.net/fulo/fulo/assets/img/icons/f1.webp" alt="" />
                    </div>
                    <div className="ps-2">
                        <h5>FREE SHIPPING</h5>
                        <p>On all orders over $75.00</p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-around  col-sm-12 col-md-4 col-lg-3">
                    <div>
                        <img src="https://htmldemo.net/fulo/fulo/assets/img/icons/f2.webp" alt="" />
                    </div>
                    <div className="ps-2">
                        <h5>EASY 30 DAYS RETURNS
                        </h5>
                        <p>30 days money back

                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-around  col-sm-12 col-md-4 col-lg-3">
                    <div>
                        <img src="	https://htmldemo.net/fulo/fulo/assets/img/icons/f3.webp" alt="" />
                    </div>
                    <div className="ps-2">
                        <h5>100% PAYMENT SECURE</h5>
                        <p>PayPal / MasterCard / Visa

                        </p>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-around  col-sm-12 col-md-4 col-lg-3">
                    <div>
                        <img src="https://htmldemo.net/fulo/fulo/assets/img/icons/f4.webp" alt="" />
                    </div>
                    <div className="ps-2">
                        <h5>24/7 SUPPORT
                        </h5>
                        <p>We will be at your service

                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Popular;