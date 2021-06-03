import React, {useState, useEffect} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import {useStore} from '../../stores/store';

export default function Chart() {
    const {dailyReadingStore} = useStore();
    const response = dailyReadingStore.getDailyReadings();
    const [dailyReadings, setDailyReadings] = useState([]);
    let arr = []
    useEffect(() => {
        console.log("use")
        response.then(dailyReadings => {
            arr = Array.from(dailyReadings)
            setDailyReadings( arr);
        })
        
    }, [])

    // console.log(dailyReadings[0].energy)

    return (
        <div className='chart'>
            <Bar
                data={{
                    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                    datasets:[
                      {
                        label:'Energy MWh',
                        data:[
                            // dailyReadings[0].energy,
                            // dailyReadings[1]['energy'],
                            // dailyReadings[2]['energy'],
                            // dailyReadings[3]['energy'],
                            // dailyReadings[4]['energy']
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
                  options={{
                    title:{
                      display:'Title',
                      text:'Energy readings from last 5 days',
                      fontSize:25
                    },
                    legend:{
                      display: true,
                      position:'bottom'
                    }
                  }}
            />
            
        </div>
    );
}