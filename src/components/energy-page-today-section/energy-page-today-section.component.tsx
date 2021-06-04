import React, {useState, useEffect} from 'react';
import './energy-page-today-section.styles.scss';
import ComponentTitle from "../title/title";
import DailyReadingContainer from "../daily-reading-container/daily-reading-container.component";
import {Words} from "../../Words";
import {useStore} from '../../stores/store';

export default function EnergyPageTodaySection() {

    const {dailyReadingStore} = useStore();
    const response = dailyReadingStore.getDailyReadings();
    const [dailyReadings, setDailyReadings] = useState([]);

    // get data from the backend
    useEffect( async () => {
        const data = await response;
        setDailyReadings(data);
    }, []);

    return (
        <div>
            <ComponentTitle titleSize={18} titleName={`Latest Observation:`} />
            {
                // dailyReading.map((dr) => <DailyReadingContainer name={dr.name} value={dr.value} measureUnit={dr.measureUnit} />)
            }
        </div>
    );
}

