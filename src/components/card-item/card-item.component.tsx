import React from 'react';
import './card-item.styles.scss';
import vectorRight from '../../assets/vector-right.png';
import vectorLeft from '../../assets/vector-left.png';
import wind from '../../assets/wind.png';
import humidity from '../../assets/humidity.png';

interface Props {
    data: {
        temp: {
            day: number
        },
        weather: [
            icon: any
        ],
        wind_speed: number,
        humidity: number
    },
    index: number
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export default function CardItem(props: Props) {
    let now = new Date();
    // now.setDate(now.getDate() + props.index); // it does the same thing as the line below 
    now.setDate(now.getDate() + (props.index - 2 + (7 - now.getDay())) % 7);

    return (
        <div className='card'>
            <h1 className='day'>{days[now.getDay()]}</h1>
            <img className='vector-right' alt='vector' src={vectorRight}/>
            <img className='vector-left' alt='vector' src={vectorLeft}/>
            <img
                className='weather-icon'
                alt='weather-icon'
                src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            />
            <div className='weather-info'>
                <span className='date'>{days[now.getDay()]}, {now.getDate()}, {months[now.getMonth()]}</span>
                <span className='temperature'>{props.data.temp.day}°</span>
                <span className='description'>{props.data.weather[0].description}</span>
                <div className='details'>
                    <div className='wind'>
                        <img className='detail-icon' src={wind} alt='wind'/>
                        <span className='detail-category'>Wind</span>
                        <span className='separator'>|</span>
                        <span className='detail-value'>{props.data.wind_speed} km/h</span>
                    </div>

                    <div className='humidity'>
                        <img className='detail-icon' src={humidity} alt='humidity'/>
                        <span className='detail-category'>Hum</span>
                        <span className='separator'>|</span>
                        <span className='detail-value'>{props.data.humidity}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
