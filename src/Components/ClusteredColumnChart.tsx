import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { DeepPartial } from "utility-types";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const ClusteredColumnChart: React.FC = () => {
  const [chartData, setChartData] = useState({
    labels: ["1 Aug", "8 Aug", "15 Aug", "22 Aug", "29 Aug", "5 Sep"],
    datasets: [
      {
        label: "Dataset 1",
        data: [45, 65, 75, 66, 73, 80],
        backgroundColor: "#FFA800",
        borderWidth: 0, // Remove border around bars
      },
      {
        label: "Dataset 2",
        data: [30, 40, 50, 45, 48, 60],
        backgroundColor: "#E5EAEE",
        borderWidth: 0, // Remove border around bars
      },
    ],
  });

  const chartOptions: any = {
    indexAxis: 'x', // Use 'y' for a vertical bar chart, 'x' for a horizontal bar chart
    scales: {
      x: {
        stacked: false, // If you want stacking on the x-axis
        grid: {
          display: false, // Remove x-axis grid lines
        },
      },
      y: {
        stacked: false, // If you want stacking on the y-axis
        beginAtZero: true, // Ensure the y-axis starts from zero
        stepSize: 30, // Set the y-axis step size to 30
        grid: {
          display: false, // Remove x-axis grid lines
        },
      },
    },
    elements: {
      bar: {
        barThickness: 10, // Adjust the value as needed to change the width of the bars
        barPercentage: 0.8, // Adjust the value to control the relative width of the bars
        borderRadius: 8, // Add border radius to bars
      },
    },
    plugins: {
      legend: {
        display: false, // Set to false if you want to hide the legend
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

 

  return (
    <div className="App">
      <div>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};
export default ClusteredColumnChart;