import React from 'react';
import './daily-parameter.styles.scss';

export default function DailyReadingContainer({name, data, icon, measurementUnit}) {
    console.log('drcontainer:', data)
    return (
        <div className="parameter-box">
            <span>{icon}</span>
            <div className="parameter-name">{name}</div>
            <div className="parameter-value">{data} <span>{measurementUnit}</span></div>
        </div>
        
        // dailyReading.length > 0 ?
        //     <div className="parameter-container">
        //         <h4>{name}</h4>
        //     </div>
        // : <div>waiting</div>
    );
}