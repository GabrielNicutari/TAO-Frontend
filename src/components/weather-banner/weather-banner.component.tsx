import React from 'react';
import './weather-banner.styles.scss';
import CardList from "../card-list/card-list.component";
import StripesDark from '../../assets/stripes-dark.png';
import StripesBlue from '../../assets/stripes-blue.png';
import { Words } from "../../Words";

export default function WeatherBanner() {
    return (
        <div id='container'>
            <img className='stripe-right' src={StripesDark} alt='stripes'/>

            <h1 className='title'>{Words.weatherForecastTitle}</h1>

            <p className='info'>
                {Words.weatherForecastDescription}
            </p>

            <CardList />

            <img className='stripe-left' src={StripesBlue} alt='stripes'/>
        </div>
    )
}
