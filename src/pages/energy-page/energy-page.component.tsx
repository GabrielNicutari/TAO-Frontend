import * as React from 'react';
import './energy-page.styles.scss';
import EnergyPageTodaySection from "../../components/energy-page-today-section/energy-page-today-section.component";

export function EnergyPage() {
    const {dailyReadingStore, userStore: {isLoggedIn}} = useStore();
    const [dailyReadings, setDailyReadings] = useState([]);

    useEffect( () => {
        fetchData();
    }, []);

    
    const fetchData = async () => {
        const response = dailyReadingStore.getDailyReadings();
        const data = await response;
        // @ts-ignore
        setDailyReadings(data);
    }

    return (
        isLoggedIn ?
        <div className={"energy-page-container"}>
            <div className={"left-energy-container"}>
                <div className={"energy-consumption-past-days"}>Energy Consumption</div>
                <div className={"energy-consumption-today"}><EnergyPageTodaySection /></div>
            </div>
            <div className={"right-energy-container"}>
                <div className={"where-money-goes"}>Where does my money go?</div>
                <div className={"energy-tips"}>Energy tips</div>
            </div>
        </div>
        :
            <h1>Unauthorized</h1>
    );
}
