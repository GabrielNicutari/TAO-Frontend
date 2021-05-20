import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import './home-page.styles.scss'


export default function HomePage() {
    return (
        <div>
            <div className="title-banner"></div>
            {/* <WeatherBanner /> */}
            <div className="small-banner"></div>
            <div className="more-info"></div>
        </div>
    )
}