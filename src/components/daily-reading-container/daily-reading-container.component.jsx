import './daily-reading-container.styles.scss';
import DailyParameter from '../daily-parameter/daily-parameter.component'
import {
    FaThermometerEmpty,
    FaThermometerThreeQuarters,
    ImPower,
    ImPowerCord,
    IoIosWater,
    IoTimer, RiWindyLine
} from "react-icons/all";
import {Words} from "../../Words";

export default function DailyReadingContainer(dailyReading) {
    console.log(dailyReading);
    return (
        dailyReading.dailyReading !== undefined ?
            <div className="daily-reading-container">
                <DailyParameter name={Words.energy} data={dailyReading.dailyReading.energy} icon={<ImPower/>} measurementUnit={"MWh"} />
                <DailyParameter name={Words.volume} data={dailyReading.dailyReading.volume} icon={<IoIosWater/>} measurementUnit={"M3"} />
                <DailyParameter name={Words.hourCounter} data={dailyReading.dailyReading.hourCounter} icon={<IoTimer/>} measurementUnit={"h"} />
                <DailyParameter name={Words.temperatureForward} data={dailyReading.dailyReading.tempForward} icon={<FaThermometerThreeQuarters/>} measurementUnit={"°C"}/>
                <DailyParameter name={Words.temperatureReturn} data={dailyReading.dailyReading.tempReturn} icon={<FaThermometerEmpty/>} measurementUnit={"°C"}/>
                <DailyParameter name={Words.power} data={dailyReading.dailyReading.power} icon={<ImPowerCord/>} measurementUnit={"kW"}/>
                <DailyParameter name={Words.flow} data={dailyReading.dailyReading.flow} icon={<RiWindyLine/>} measurementUnit={"l/h"}/>
            </div>
        : <div>Waiting for data...</div>
    );
}
