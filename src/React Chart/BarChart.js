import React from 'react'
import {Bar} from 'react-chartjs-2'

function BarChart() {
    const data = {
        labels: ["Jan", "Feb", "March", "Apr", "may"], // label for x axis of bar graph
        datasets: [
            {
                label: "Sales of 2021 (M)", // Title of bar graph
                data: [3,1,2,4,5],
                     // these are for bar color
                backgroundColor: "grey",
                pointBackgroundColor: "green",
                

            
            },
            {
                label: "Sales of 2020 (M)", // Title of bar graph
                data: [2,1,5,3,4],  // value for y axis of bar graph
                backgroundColor: "blue",
                pointBackgroundColor: "red",
            
            }
        ]
            

    }
   
    return (
        <div>
            <Bar data={data}/>
        </div>
    )
}

export default BarChart
