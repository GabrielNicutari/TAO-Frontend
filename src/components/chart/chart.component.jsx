import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import {useStore} from '../../stores/store';

export default function Chart() {
    const {dailyReadingStore} = useStore();
    const response = dailyReadingStore.getDailyReadings();
    const [dailyReadings, setDailyReadings] = useState([]);
    
    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await response;
        setDailyReadings(data);
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return (
        dailyReadings.length > 0 ?
        <div className='chart'>
            <div> {new Date(dailyReadings[0].timestamp).getDate()} {months[new Date(dailyReadings[0].timestamp).getMonth()]} -&nbsp;
                    {new Date(dailyReadings[4].timestamp).getDate()} {months[new Date(dailyReadings[4].timestamp).getMonth()]},&nbsp;
                    {new Date(dailyReadings[4].timestamp).getFullYear()} 
            </div>
            <Bar
                data={{
                    labels: [dailyReadings[0].timestamp.substring(0,10), dailyReadings[1].timestamp.substring(0,10), dailyReadings[2].timestamp.substring(0,10), dailyReadings[3].timestamp.substring(0,10), dailyReadings[4].timestamp.substring(0,10),],
                    datasets:[
                      {
                        label:'Energy MWh',
                        data:[
                            dailyReadings[0].energy,
                            dailyReadings[1].energy,
                            dailyReadings[2].energy,
                            dailyReadings[3].energy,
                            dailyReadings[4].energy 
                        ],
                        backgroundColor:[
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                        ]
                      }
                    ]
                  }} 
            />
            
        </div> : 
        <div className='chart'>
            <Bar
                data={{
                    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                    datasets:[
                      {
                        label:'Energy MWh',
                        data:[],
                      }
                    ]
                  }} 
            />
        </div>
    );
}
