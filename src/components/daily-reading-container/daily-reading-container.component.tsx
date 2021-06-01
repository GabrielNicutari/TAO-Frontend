import './daily-reading-container.styles.scss';
import {useState} from "react";

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
                            <img src={"/english_language.png"} alt={"icon"}/>
                        )
                    } else if (imageUrl === "Volume") {
                        return (
                            <img src={"/german_language.png"} alt={"icon"}/>
                        )
                    } else if (imageUrl === "Power") {
                        return (
                            <img src={"/arabic_language.png"} alt={"icon"}/>
                        )
                    } else if (imageUrl === "Temperature Forward") {
                        return (
                            <img src={"/french_language.png"} alt={"icon"}/>
                        )
                    } else if (imageUrl === "Temperature Return") {
                        return (
                            <img src={"/english_language.png"} alt={"icon"}/>
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
