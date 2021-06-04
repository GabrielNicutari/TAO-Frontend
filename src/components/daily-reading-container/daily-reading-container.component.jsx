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



export default function DailyReadingContainer({dailyReadings}) {
    let lg = 0;
    if (dailyReadings)
        lg = dailyReadings.length;
    return (
        lg > 0 ?
            <div className="daily-reading-container">
                <DailyParameter name={"energy"} data={dailyReadings[lg-1].energy} icon={<ImPower/>} measurementUnit={"MWh"} />
                <DailyParameter name={"volume"} data={dailyReadings[lg-1].volume} icon={<IoIosWater/>} measurementUnit={"M3"} />
                <DailyParameter name={"hourCounter"} data={dailyReadings[lg-1].hourCounter} icon={<IoTimer/>} measurementUnit={"h"} />
                <DailyParameter name={"tempForward"} data={dailyReadings[lg-1].tempForward} icon={<FaThermometerThreeQuarters/>} measurementUnit={"°C"}/>
                <DailyParameter name={"tempReturn"} data={dailyReadings[lg-1].tempReturn} icon={<FaThermometerEmpty/>} measurementUnit={"°C"}/>
                <DailyParameter name={"power"} data={dailyReadings[lg-1].power} icon={<ImPowerCord/>} measurementUnit={"kW"}/>
                <DailyParameter name={"flow"} data={dailyReadings[lg-1].flow} icon={<RiWindyLine/>} measurementUnit={"l/h"}/>

            </div>
        : <div>Waiting for data...</div>
    );
}
