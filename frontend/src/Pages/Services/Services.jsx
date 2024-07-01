import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Services.css';
function Services(){
    return (
        <div>
            <Navbar />
            <div className="services-container">
                <h1>Our Services</h1>
                <p>Welcome to our canteen! Here are the services we offer:</p>
                <ul>
                    <li>Breakfast, lunch, and dinner options</li>
                    <li>Vegetarian and vegan meals</li>
                    <li>Daily specials and discounts</li>
                    <li>Online ordering and delivery</li>
                    <li>Catering for events and meetings</li>
                </ul>
            </div>
        </div>
    );
}
export default Services;
