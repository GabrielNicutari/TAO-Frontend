import React from 'react';
import {Button} from '@material-ui/core';
import WeatherBanner from "../../components/weather-banner/weather-banner.component";
import './home-page.styles.scss'
import house from '../../assets/house.png'


export default function HomePage() {
    return (
        <div className="home-page-container">
            <div className="title-banner">
                <div className="left-box">
                    <div className="title-parag">NEW ENERGY SOLUTION FOR YOU</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed vulputate vitae velit dictum cursus amet. Turpis donec ut velit quis. Cursus commodo, eget urna, sapien amet. </div>
                    <Button >Read More</Button>
                </div>
                 
                <img src={house} alt="house" />
            </div>
            <WeatherBanner />
            {/*<div className="small-banner"></div>*/}
            {/*<div className="more-info"></div>*/}
        </div>
    )
}
