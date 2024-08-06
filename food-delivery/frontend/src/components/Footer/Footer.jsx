import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>     Provides a seamless and enjoyable experience for discovering and ordering
                     a wide range of dishes. With an intuitive menu that allows you to explore different categories, 
                     finding your next meal is easy and efficient. Whether you’re craving something specific or 
                     looking to try new flavors, the site’s streamlined ordering process and handy app 
                     make it simple to get high-quality meals delivered right to your door.

                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
                </div>
                <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                <ul>
                    <li>0756453253</li>
                    <li>butnariudiana76@yahoo.com</li>
                </ul>
                </div>

            </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
