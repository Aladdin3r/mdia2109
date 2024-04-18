import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useState, useEffect } from "react"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalBarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Data 1', 
                    data: [10, 6, 15, 20, 12, 4, 5],
                    borderColor: 'rgba(50, 165, 215, 0.9)',
                    backgroundColor: 'rgba(50, 165, 215, 0.9)'
                },
                {
                    label: 'Data 2', 
                    data: [20, 16, 15, 8, 12, 9, 11],
                    borderColor: 'rgba(122, 152, 20, 0.5)',
                    backgroundColor: 'rgba(122, 152, 20, 0.5)'
                },
                {
                    label: 'Data 3', 
                    data: [13, 9, 11, 22, 14, 14, 8],
                    borderColor: 'rgba(200, 112, 150, 0.2)',
                    backgroundColor: 'rgba(200, 112, 150, 0.2)'
                }
            ]            
        })

        setChartOptions({
            indexAxis: 'y',
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
                <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
            </div>
        </>
    )
}