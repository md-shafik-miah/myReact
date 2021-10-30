import React from 'react'
import {Line} from 'react-chartjs-2'

function ReactChart() {
    const data = {
        labels: ["Jan", "Feb", "March", "Apr", "may"], // label for x axis of line graph
        datasets: [
            {
                label: "Sales of 2021 (M)", // Title of line graph
                data: [3,1,2,4,5],
                borderColor: "red",      // these are for line color
                backgroundColor: "grey",
                pointBackgroundColor: "green",
                pointBorderColor: "blue"  // value for y axis of line graph

            
            },
            {
                label: "Sales of 2020 (M)", // Title of line graph
                data: [2,1,5,3,4],  // value for y axis of line graph
                borderColor: "yellow",      // these are for line color
                backgroundColor: "blue",
                pointBackgroundColor: "red",
                pointBorderColor: "green"
            
            }
        ]
            

    }
    const options = {
        title : {
            display: true,
            text: "Line Chart"
        },
        scales : {
            yAxes : [
                {
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }
    }
    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    )
}

export default ReactChart
