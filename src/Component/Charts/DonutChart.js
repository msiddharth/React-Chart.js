import React from 'react'
import { Doughnut } from 'react-chartjs-2'


const DoughnutChartView = () => {
    return (
        <div className="chart_sec">
            <div className="cart_main_heading">
                <h1>Donut Chart</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                <Doughnut
                data={{
                    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                    datasets: [
                        {
                            label:'Population',
                            data:[
                                617594,
                                181045,
                                153060,
                                106519,
                                105162,
                                95072
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 1,
                        }
                    ],
                }}
                height={400}
                width={600}
                options={{

                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                    legend: {
                        labels: {
                            fontSize: 25,
                        },
                    },
                }}
            />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoughnutChartView;