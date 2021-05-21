import React from 'react';
import './weather-banner.styles.scss';
import CardList from "../card-list/card-list.component";

export default function WeatherBanner() {
    return (
        <div id='container'>
            <h1 className='title'>Weather Forecast</h1>

            <p className='info'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Amet sed vulputate vitae velit dictum cursus amet.
                Turpis donec ut velit quis. Cursus commodo, eget urna, sapien amet.
            </p>

            <CardList />
        </div>
    )
}
