import './daily-reading-container.styles.scss';
import {useState} from "react";
import {FaThermometerEmpty, FaThermometerThreeQuarters, ImPower, ImPowerCord, IoIosWater} from "react-icons/all";

interface DailyReadingContainerProps{
    name: string,
    value: number,
    measureUnit: string,
}

function DailyReadingContainer(props: DailyReadingContainerProps) {
    const [imageUrl, setImageUrl] = useState(props.name)

    return (
        <div className="daily-reading-container">
            {/* Daily Reading Icon */}
            <div className={"icon"}>
                {(() => {
                    if (imageUrl === "Energy") {
                        return (
                            <ImPower />
                        )
                    } else if (imageUrl === "Volume") {
                        return (
                            <IoIosWater />
                        )
                    } else if (imageUrl === "Power") {
                        return (
                            <ImPowerCord />
                        )
                    } else if (imageUrl === "Temperature Forward") {
                        return (
                            <FaThermometerThreeQuarters />
                        )
                    } else if (imageUrl === "Temperature Return") {
                        return (
                            <FaThermometerEmpty />
                        )
                    } else {
                        return (
                            <img src={"/english_language.png"} alt={"icon"}/>
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
