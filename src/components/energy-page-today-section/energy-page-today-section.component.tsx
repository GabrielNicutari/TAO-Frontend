import React, {useState} from 'react';
import './energy-page-today-section.styles.scss';
import ComponentTitle from "../title/title";
import DailyReadingContainer from "../daily-reading-container/daily-reading-container.component";
import {Words} from "../../Words";

const EnergyPageTodaySection = () => {

    // get data from the backend
    const getData = () => {
        return {
            TimeStamp: new Date(),
            Energy: 211300,
            Volume: 5832,
            HourCounter: 221,
            TempForward: 79.5,
            TempReturn: 35.2,
            Power: 1218,
            Flow: 4366,
        }
    }

    const data = getData();

    const [dailyReading] = useState([
                { name: Words.energy, value: data.Energy, measureUnit: "MWh" },
                { name: Words.volume, value: data.Volume, measureUnit: "M3" },
                { name: Words.hourCounter, value: data.HourCounter, measureUnit: "h" },
                { name: Words.temperatureForward, value: data.TempForward, measureUnit: "°C" },
                { name: Words.temperatureReturn, value: data.TempReturn, measureUnit: "°C" },
                { name: Words.power, value: data.Power, measureUnit: "kW" },
                { name: Words.flow, value: data.Flow, measureUnit: "MWh" },
            ]);

    return (
        <div>
            <ComponentTitle titleSize={18} titleName={`Latest Observation: ${data.TimeStamp.toDateString()}`} />
            {
                dailyReading.map((dr) => <DailyReadingContainer name={dr.name} value={dr.value} measureUnit={dr.measureUnit} />)
            }
        </div>
    )
}
export default EnergyPageTodaySection;
