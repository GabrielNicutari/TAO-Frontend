import React, {useState, useEffect} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import {useStore} from '../../stores/store';

export default function Chart() {
    const {dailyReadingStore} = useStore();
    const response = dailyReadingStore.getDailyReadings();
    const [dailyReadings, setDailyReadings] = useState([]);
    
    useEffect( async () => {
        const data = await response;
        setDailyReadings(data)
    }, [])

    // console.log(dailyReadings)

    return (
        dailyReadings.length > 0 ?
        <div className='chart'>
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
                          'rgba(255, 99, 132, 0.6)',
                          'rgba(54, 162, 235, 0.6)',
                          'rgba(255, 206, 86, 0.6)',
                          'rgba(75, 192, 192, 0.6)',
                          'rgba(153, 102, 255, 0.6)',
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