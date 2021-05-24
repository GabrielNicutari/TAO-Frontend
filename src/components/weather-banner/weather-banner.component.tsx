import React from 'react';
import './weather-banner.styles.scss';
import CardList from "../card-list/card-list.component";
import StripesDark from '../../assets/stripes-dark.png';
import StripesBlue from '../../assets/stripes-blue.png';

export default function WeatherBanner() {
    return (
        <div id='container'>
            <img className='stripe-right' src={StripesDark} alt='stripes'/>

            <h1 className='title'>Weather Forecast</h1>

            <p className='info'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Amet sed vulputate vitae velit dictum cursus amet.
                Turpis donec ut velit quis. Cursus commodo, eget urna, sapien amet.
            </p>

            <CardList />

            <img className='stripe-left' src={StripesBlue} alt='stripes'/>
        </div>
    )
}
