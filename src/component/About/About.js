import React from 'react';
import './About.css'
import store from '../../img/store.jpg'

const About = () => {
    return (
        <div className="container row about-section align-items-center mx-auto py-4">
            <div className="col-sm-12 col-md-6 col-lg-6">
                <img src={store} alt="" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <h2>About Our Grocery Store</h2>
                <p>Omega Grocery is a best Store for buy you Daily products. Here you can find fresh Produce, metas, dairy products and bakery goods alongside anned, froxen and prepare foods. We can provide all facilites all user. If you want to take your products on Online , we can do it. We also sell a full range of household, healthcare and personal care items. </p>
            </div>
        </div>
    );
};

export default About;