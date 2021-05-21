import React from 'react';
import {Button} from '@material-ui/core';
import WeatherBanner from "../../components/weather-banner/weather-banner.component";
import './home-page.styles.scss'
import house from '../../assets/house.png'


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
                    <div className="title-parag">NEW ENERGY SOLUTION FOR YOU</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed vulputate vitae velit dictum cursus amet. Turpis donec ut velit quis. Cursus commodo, eget urna, sapien amet.</div>
                    <Button 
                        style={buttonStyle} 
                        variant="contained"
                        href="#">
                        Read More
                    </Button>
                </div>
                 
                <img src={house} alt="house" className="house-img"/>
            </div>
            <WeatherBanner />
            {/*<div className="small-banner"></div>*/}
            {/*<div className="more-info"></div>*/}
        </div>
    )
}
