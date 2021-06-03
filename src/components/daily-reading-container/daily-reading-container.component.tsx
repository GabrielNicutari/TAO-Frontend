import './daily-reading-container.styles.scss';
import {
    FaThermometerEmpty,
    FaThermometerThreeQuarters,
    ImPower,
    ImPowerCord,
    IoIosWater,
    IoTimer, RiWindyLine
} from "react-icons/all";

interface DailyReadingContainerProps{
    name: string,
    value: any,
    measureUnit: string,
}

function DailyReadingContainer(props: DailyReadingContainerProps) {
    return (
        <div className="daily-reading-container">
            {/* Daily Reading Icon */}
            <div className="daily-reading-icon">
                {(() => {
                    if (props.name === "Energy") {
                        return (
                            <ImPower/>
                        )
                    } else if (props.name === "Volume") {
                        return (
                            <IoIosWater/>
                        )
                    } else if (props.name === "Hour Counter") {
                        return (
                            <IoTimer/>
                        )
                    } else if (props.name === "Power") {
                        return (
                            <ImPowerCord/>
                        )
                    } else if (props.name === "Flow") {
                      return (
                          <RiWindyLine />
                      )
                    } else if (props.name === "Temperature Forward") {
                        return (
                            <FaThermometerThreeQuarters />
                        )
                    } else if (props.name === "Temperature Return") {
                        return (
                            <FaThermometerEmpty />
                        )
                    } else {
                        return (
                            <ImPower/>
                        )
                    }
                })()}
            </div>
            {/* Daily Reading name */}
            <div className="daily-reading-name">{props.name}</div>
            {/* Daily Reading value */}
            <div className="daily-reading-value"><strong>{props.value}</strong></div>
            {/* Daily Reading measure unit */}
            <div className="daily-reading-measure-unit"><strong>{props.measureUnit}</strong></div>
        </div>
    );
}
export default DailyReadingContainer;
