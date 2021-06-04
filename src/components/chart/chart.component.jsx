import React from 'react';
import {Bar} from 'react-chartjs-2';


export default function Chart({dailyReadings}) {

    // if (props.dailyReadings.length > 0)
    //   console.log(props.dailyReadings[0].timestamp)

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return (
      // <div>asdasd</div>
        dailyReadings.length > 0 ?
        <div className='chart'>
            <div> {new Date(dailyReadings[0].timestamp).getDate()} {months[new Date(dailyReadings[0].timestamp).getMonth()]} -&nbsp;
                    {new Date(dailyReadings[4].timestamp).getDate()} {months[new Date(dailyReadings[4].timestamp).getMonth()]},&nbsp;
                    {new Date(dailyReadings[4].timestamp).getFullYear()} 
            </div>
            <Bar
                data={{
                    labels: [dailyReadings[0].timestamp.substring(0,10), dailyReadings[1].timestamp.substring(0,10), dailyReadings[2].timestamp.substring(0,10), dailyReadings[3].timestamp.substring(0,10), dailyReadings[4].timestamp.substring(0,10)],
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
                    labels: [],
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
