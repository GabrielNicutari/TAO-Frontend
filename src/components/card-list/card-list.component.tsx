import React, {useEffect, useState} from 'react';
import CardItem from "../card-item/card-item.component";
import './card-list.styles.scss';

const api = {
    key: process.env.REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/"
}

export default function CardList() {
    const lon = 12.3638;
    const lat = 55.6569;
    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
        if(weatherList.length === 0) {
            fetch(`${api.base}onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(res => {
                    setWeatherList(res.daily);
                    // console.log(res.daily);
                })
                .then(res => {
                    // console.log(res);
                });
        }
    })

    return (
        <div className='card-list'>
            {
                (weatherList.length > 0 ) ?
                    (
                        weatherList.slice(0, 5).map((weather, index) => (
                            <CardItem key={index} data={weather} index={index}/>
                        ))
                    ) :
                    (
                        <h1>Nothing was found</h1>
                    )
            }
        </div>
    );
}
