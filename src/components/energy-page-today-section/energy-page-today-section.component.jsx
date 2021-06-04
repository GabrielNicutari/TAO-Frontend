import React, {useState, useEffect} from 'react';
import './energy-page-today-section.styles.scss';
import ComponentTitle from "../title/title";
import DailyReadingContainer from "../daily-reading-container/daily-reading-container.component";


export default function EnergyPageTodaySection({dailyReadings}) {

    

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        dailyReadings.length > 0 ?
        <div>
            <h2>Latest Observation: <span>{new Date(dailyReadings[4].timestamp).getDate()} - {months[new Date(dailyReadings[4].timestamp).getMonth()]} {new Date(dailyReadings[4].timestamp).getFullYear()}</span></h2>
            <DailyReadingContainer dailyReadings={dailyReadings} />
            
        </div>
        : <h2>Latest Observation:</h2>
    );
}

