import React, {useEffect, useState} from 'react';
import './energy-page.styles.scss';
import EnergyPageTodaySection from "../../components/energy-page-today-section/energy-page-today-section.component";
import Chart from '../../components/chart/chart.component';
import {useStore} from '../../stores/store';
import DailyReadingStore from "../../stores/daily-reading.store";
import {object} from "yup";
import {Words} from "../../Words";

export function EnergyPage() {
    const {dailyReadingStore, userStore: {isLoggedIn}} = useStore();
    const [latestFiveObservations, setLatestFiveObservations] = useState<any[]>([]);
    const [latestObservation, setLatestObservation] = useState<any>({});

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let response: any[] | undefined;
        response = await dailyReadingStore.getDailyReadings(1, 5);
        if (response !== undefined) {
            setLatestFiveObservations(response);
            setLatestObservation(response[response.length-1]);
        }
    }

    return (
        isLoggedIn ?
        <div className={"energy-page-container"}>
            <div className={"left-energy-container"}>
                <h2>{Words.energyConsumption}</h2>
                <Chart dailyReadings={latestFiveObservations} />
                <div className={"energy-consumption-today"}>
                    <EnergyPageTodaySection dailyReading={latestObservation}/>
                    </div>
                </div>
            <div className={"right-energy-container"}>
                <div className={"where-money-goes"}>
                    <h3>Where does my money go?</h3>
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
