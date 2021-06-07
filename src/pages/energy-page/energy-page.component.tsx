import React, {useEffect, useState} from 'react';
import './energy-page.styles.scss';
import EnergyPageTodaySection from "../../components/energy-page-today-section/energy-page-today-section.component";
import Chart from '../../components/chart/chart.component';
import {useStore} from '../../stores/store';
import DailyReadingStore from "../../stores/daily-reading.store";
import {object} from "yup";
import {Words} from "../../Words";
import {ImPower} from "react-icons/all";
import StripesDark from '../../assets/stripes-dark.png';
import StripesBlue from '../../assets/stripes-blue.png';
import SaveEnergy from "../../assets/save-energy.png";
import Plant from "../../assets/plant.png";

export function EnergyPage() {
    const {dailyReadingStore, userStore: {user}, energyStatistics} = useStore();
    const [latestFiveObservations, setLatestFiveObservations] = useState<any[]>([]);
    const [latestObservation, setLatestObservation] = useState<any>({});
    const [energyStats, setEnergyStats] = useState<any>({});

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let responseEnergyStats = await energyStatistics.getEnergyStatistics(2);
        setEnergyStats(responseEnergyStats);
        console.log('responseEnergy:', energyStats);
        
        let response: any[] | undefined;
        // replace houseId parameter to the getDailyReadings method with logged in user id
        response = await dailyReadingStore.getDailyReadings(2, 5);
        if (response !== undefined) {
            setLatestFiveObservations(response);
            setLatestObservation(response[0]);
        }

        
    }

    return (
        user ?
        <div className={"energy-page-container"}>
            <img src={StripesDark} alt="stripes-dark" className="stripes-dark-right-top"/>
            <div className={"left-energy-container"}>
                <h2>{Words.energyConsumption}</h2>
                <Chart dailyReadings={latestFiveObservations} />
                <div className={"energy-consumption-today"}>
                    <EnergyPageTodaySection dailyReading={latestObservation}/>
                    </div>
                </div>
            <div className={"right-energy-container"}>
                <div className={"where-money-goes"}>
                    <h2>Where does my money go?</h2>
                    <div className="stats-container">
                        <div className="stat-box stat-icon"><ImPower /> 
                            Energy
                            <div>KWh</div>
                        </div>

                        <div className="stat-box">
                            <div className="stat-value">{energyStats.minEnergy}</div>
                            MIN
                            <div className="stat-price">{(2.078 * energyStats.minEnergy).toFixed(0)} dkk</div>
                        </div>

                        <div className="stat-box">
                            <div className="stat-value">{energyStats.maxEnergy}</div>
                            MAX
                            <div className="stat-price">{(2.078 * energyStats.maxEnergy).toFixed(0)} dkk</div>
                        </div>

                        <div className="stat-box">
                            <div className="stat-value">{energyStats.avgEnergy}</div>
                            AVERAGE
                            <div className="stat-price">{(2.078 * energyStats.avgEnergy).toFixed(0)} dkk</div>
                        </div>
                    </div>
                    
                </div>

                <div className="tips-box">
                    <div className="icons">
                        <div className="save-energy-icon"><img src={SaveEnergy} alt="save energy" /></div>
                        <div className="plant-icon"><img src={Plant} alt="green mindset"/></div>
                    </div>
                    
                    <div className="tips-info">
                        <div className="tip-header">Save more energy</div> 
                        <div className="tip-text"> Don't hesitate and find out how much energy you can save by following a few simple tips </div>
                        <button className="tip-button"> VIEW TIPS</button>
                    </div>
                </div>
            </div>
            <img src={StripesBlue} alt="stripes-blue" className="stripes-blue-left-energy-page"/>
        </div>
        :
            <h1>Unauthorized</h1>
    );
}
