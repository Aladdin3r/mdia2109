import { Pie } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useState, useEffect } from "react"

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of Votes', 
                    data: [10, 6, 15, 20, 12, 4],
                    borderColor: [
                        'rgba(53, 162, 235, 0.4)',
                        'rgba(230, 12, 235, 0.4)',
                        'rgba(155, 102, 235, 0.4)',
                        'rgba(10, 132, 205, 0.4)',
                        'rgba(215, 82, 15, 0.4)',
                        'rgba(155, 152, 215, 0.4)',
                    ],
                    backgroundColor: [
                        'rgba(53, 162, 235, 0.4)',
                        'rgba(230, 12, 235, 0.4)',
                        'rgba(155, 102, 235, 0.4)',
                        'rgba(10, 132, 205, 0.4)',
                        'rgba(215, 82, 15, 0.4)',
                        'rgba(155, 152, 215, 0.4)',
                    ],
                    borderWidth: 1,
                }
            ]            
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })
    })

    return(
        <>
            <div>
                <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
            </div>
        </>
    )
}