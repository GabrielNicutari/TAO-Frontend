import React, {useEffect, useState} from 'react';
import './energy-page.styles.scss';
import EnergyPageTodaySection from "../../components/energy-page-today-section/energy-page-today-section.component";
import Chart from '../../components/chart/chart.component';
import {useStore} from '../../stores/store';

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
                <h2>Energy Consumption</h2>
                <Chart dailyReadings={dailyReadings}/>
                <div className={"energy-consumption-today"}>
                    <EnergyPageTodaySection dailyReadings={dailyReadings}/>
                    </div>
                </div>
            <div className={"right-energy-container"}>
                <div className={"where-money-goes"}>
                    <h3>Where my money goes?</h3> 
                    <h4>Energy</h4>
                    <progress max={"7000"} value={"1512"} className="progress-bar"></progress>
                    <h4>Water</h4>
                    <progress max={"7000"} value={"2192"} className="progress-bar"></progress>
                    <h4>Heat</h4>
                    <progress max={"7000"} value={"4312"} className="progress-bar"></progress>
                </div>
                {/* <div className={"energy-tips"}>Energy tips</div> */}
            </div>
        </div>
        :
            <h1>Unauthorized</h1>
    );
}
