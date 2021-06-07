import './energy-page-today-section.styles.scss';
import DailyReadingContainer from "../daily-reading-container/daily-reading-container.component";
import {Words} from "../../Words";

export default function EnergyPageTodaySection({dailyReading}) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div>
            {
                dailyReading ?
                <div>
                    <h2>{Words.latestObservation}:
                    <span style={{marginLeft: "0.3em"}}>{new Date(dailyReading.timestamp).getDate()}</span>
                    <span style={{marginLeft: "0.3em"}}>{months[new Date(dailyReading.timestamp).getMonth()]}</span>
                    <span style={{marginLeft: "0.3em"}}>{new Date(dailyReading.timestamp).getFullYear()}</span>
                    </h2>
                    <DailyReadingContainer dailyReading={dailyReading}/>
                </div> : <h2>Loading...</h2>
            }
        </div>
    );
}

