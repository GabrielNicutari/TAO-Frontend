import React from 'react';
import {Button} from '@material-ui/core';
import WeatherBanner from "../../components/weather-banner/weather-banner.component";
import InfoCard from "../../components/info-card/info-card.component";
import './home-page.styles.scss';
import house from '../../assets/house.png';
import profileIcon from '../../assets/profile_icon.png';
import shieldIcon from '../../assets/shield_icon.png';
import happyFaceIcon from '../../assets/happy_face_icon.png';
import StripesDark from '../../assets/stripes-dark.png';
import StripesBlue from '../../assets/stripes-blue.png'

import infoIcon1 from '../../assets/info-icon1.png';
import infoIcon2 from '../../assets/info-icon2.png';
import infoIcon3 from '../../assets/info-icon3.png';
import {Words} from "../../Words";

export default function HomePage() {
    const buttonStyle = {
        background: 'linear-gradient(90deg, #28cdcd 0%, rgba(0,42,57,0.6783088235294117) 100%)',
        color: 'white',
        height: 48,
        padding: '0 100px',
        margin: '20px 80px',
      };

    return (
        <div className="home-page-container">
            <div className="title-banner">
                <div className="left-box">
                    <div className="title-parag">{Words.homepageTitle}</div>
                    <div>{Words.homepageSubtitle}</div>
                    <Button
                        className='button'
                        style={buttonStyle} 
                        variant="contained"
                        href="#">
                        {Words.readMore}
                    </Button>
                </div>
                <img src={house} alt="house" className="house-img"/>
            </div>

            <WeatherBanner />

            <div className="small-banner">
                <div className="small-title">{Words.services}</div>

                <div className="small-box">
                    <div>
                        <img src={profileIcon} alt="profile-icon" className="small-icon"/>
                    </div>
                    <b>{Words.service1Title}</b>
                    <div>{Words.service1Description}</div>
                </div>

                <div className="small-box">
                    <div>
                        <img src={shieldIcon} alt="profile-icon" className="small-icon"/>
                    </div>
                    <b>{Words.service2Title}</b>
                    <div>{Words.service2Description}</div>
                </div>

                <div className="small-box">
                    <div>
                        <img src={happyFaceIcon} alt="profile-icon" className="small-icon"/>
                    </div>
                    <b className="mini-title">{Words.service3Title}</b>
                    <div>{Words.service3Description}</div>
                </div>
            </div>
            
            <div className="info-container">
                <img src={StripesDark} alt="stripes-dark" className="stripes-dark-right-top"/>
                <div className="items">
                    <div className="text">{Words.infoTitle}</div>
                    <InfoCard infoIcon={infoIcon1 }/>
                    <InfoCard infoIcon={infoIcon2} style={"special-card"}/>
                    <InfoCard infoIcon={infoIcon3} />
                </div>
                <img src={StripesBlue} alt="stripes-blue" className="stripes-blue-left"/>
            </div>
        </div>
    )
}
