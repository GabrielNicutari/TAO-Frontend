import React, {useState} from 'react';
import './energy-page-today-section.styles.scss';
import ComponentTitle from "../title/title";
import DailyReadingContainer from "../daily-reading-container/daily-reading-container.component";

const EnergyPageTodaySection = () => {
    // get the data from the backend
    const [dailyReadings, setDailyReadings] = useState([
        {name: "Energy", value: 224, measureUnit: "mwh"},
        {name: "Volume", value: 224, measureUnit: "m3"},
        {name: "Power", value: 224, measureUnit: "mwh"},
        {name: "Temperature Forward", value: 224, measureUnit: "°C"},
        {name: "Temperature Return", value: 224, measureUnit: "°C"},
    ]);

    return (
        <div>
            <ComponentTitle titleSize={18} titleName={"Today"} />
            {
                dailyReadings.map(dailyReading => <DailyReadingContainer name={dailyReading.name}
                                                                         value={dailyReading.value}
                                                                         measureUnit={dailyReading.measureUnit}/>)
            }
        </div>
    )
}
export default EnergyPageTodaySection;
