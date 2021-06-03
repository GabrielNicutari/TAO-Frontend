import * as React from 'react';
import './energy-page.styles.scss';
import EnergyPageTodaySection from "../../components/energy-page-today-section/energy-page-today-section.component";
import {useStore} from '../../stores/store';
import {useState} from 'react';

export function EnergyPage() {
    const {dailyReadingStore} = useStore();
    const response = dailyReadingStore.getDailyReadings();
    const [energy, setEnergy] = useState(0);
    response.then(dr => {
        if (dr) {
            setEnergy(dr[0].energy);
        }
    });
    

    return (
        <div className={"energy-page-container"}>
            <div className={"left-energy-container"}>
                <div className={"energy-consumption-past-days"}>{energy}</div>
                <div className={"energy-consumption-today"}><EnergyPageTodaySection /></div>
            </div>
            <div className={"right-energy-container"}>
                <div className={"where-money-goes"}>Where does my money go?</div>
                <div className={"energy-tips"}>Energy tips</div>
            </div>
        </div>
    );
}
