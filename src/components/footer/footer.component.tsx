import React from 'react';
import './footer.styles.scss';
import enapterLogo from '../../assets/enapter-logo.png';

import { FaYoutube } from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function InfoCard() {
    const iconStyle = {
        height: '30px',
        width: '28px',
        margin: '0 .7vw'
    };

    return (
        <div className="footer">
                <div className="top-box">
                    <img src={enapterLogo} alt="enapter-logo" className="footer-logo"/>
                    <div className="footer-container">
                        <div className="small-header">Quick Links</div> 
                        <div className="footer-field">Sign Up</div>
                        <div className="footer-field">About Us</div>
                    </div>
                    <div className="footer-container">
                        <div className="small-header">Quick Links</div> 
                        <div className="footer-field">Sign Up</div>
                        <div className="footer-field">About Us</div>
                    </div>
                    <div className="footer-container">
                        <div className="small-header">Quick Links</div> 
                        <div className="footer-field">Sign Up</div>
                        <div className="footer-field">About Us</div>
                    </div>
                </div>

                <div className="bottom-box">
                    Copyright © 2020. All rights reserved.
                    <div className="social-icons">
                        <a href="#"><FaYoutube style={iconStyle}/></a> 
                        <a href="#"><FaInstagram style={iconStyle}/></a>
                        <a href="#"><FaFacebook style={iconStyle}/></a>
                        <a href="#"><FaTwitter style={iconStyle}/></a>
                    </div>
                </div>

            </div>
    )
}