import React from 'react';
import './card-item.styles.scss';
import vectorRight from '../../assets/vector-right.png'
import vectorLeft from '../../assets/vector-left.png'

interface Props {
    data: {
        temp: {
            day: number
        },
        weather: [
            icon: any
        ]
    },
    index: number
}

export default function CardItem(props: Props) {
    return (
        <div className='card'>
            <h1 className='day'>Today</h1>
            <img className='vector-right' alt='vector' src={vectorRight}/>
            <img className='vector-left' alt='vector' src={vectorLeft}/>
            <img
                className='weather-icon'
                alt='weather-icon'
                src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            />
            <div className='weather-info'>
                <span className='date'>Today, 21 May</span>
                <span className='temperature'>{props.data.temp.day}°</span>
                <span className='description'>Cloudy</span>
                <div className='details'>
                    <div className='wind'>
                        <span>Wind</span>
                        <span>|</span>
                        <span>10 km/h</span>
                    </div>

                    <div className='humidity'>
                        <span>Hum</span>
                        <span>|</span>
                        <span>54%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
