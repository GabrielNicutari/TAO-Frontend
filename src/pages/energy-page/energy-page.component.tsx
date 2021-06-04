import * as React from 'react';
import './energy-page.styles.scss';
import EnergyPageTodaySection from "../../components/energy-page-today-section/energy-page-today-section.component";
import Chart from '../../components/chart/chart.component';

export function EnergyPage() {

    return (
        <div className={"energy-page-container"}>
            <div className={"left-energy-container"}>
                <h2>Energy Consumption</h2>
                <Chart />
                <div className={"energy-consumption-today"}><EnergyPageTodaySection /></div>
            </div>
            <div className={"right-energy-container"}>
                <div className={"where-money-goes"}>Where does my money go?</div>
                <div className={"energy-tips"}>Energy tips</div>
            </div>
        </div>
    );
}
