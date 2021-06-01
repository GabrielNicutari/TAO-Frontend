import * as React from 'react';
import './energy-page.styles.scss';
import EnergyDataContainer from "../../components/energy-data-container/energy-data-container.component";

export function EnergyPage() {
    return (
        <div className={"energy-page-container"}>
            <div className={"left-energy-container"}>
                <div className={"energy-consumption-past-days"}><EnergyDataContainer /></div>
                <div className={"energy-consumption-today"}><EnergyDataContainer /></div>
            </div>
            <div className={"right-energy-container"}>
                <div className={"where-money-goes"}><EnergyDataContainer /></div>
                <div className={"energy-tips"}><EnergyDataContainer /></div>
            </div>
        </div>
    );
}
